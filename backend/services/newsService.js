const axios = require('axios');
const config = require('../config/config');
const { classifyText } = require('./classificationService');
const Parser = require('@postlight/parser');


const getNews = async() => {
    const url = `${config.newsApi.baseUrl}?apikey=${config.newsApi.apiKey}&language=en`;
    try {
        const response = await axios.get(url);
        if (response && response.status === 200) {

            // Remove HTML tags but preserve newlines
            // console.log("Here's the result", result);
            // const cleanText = result.content.replace(/<[^>]*>/g, '').trim();
            // console.log("Here's the text", cleanText);
            const processedArticles = await Promise.all(
                response.data.results.map(async (article) => {
                    const parsedContent = await Parser.parse(article.link);
                    const content = parsedContent?.content || '';
                    if (content === '') {
                        news_content = "Error loading content";
                    } else {
                        news_content = content.replace(/<[^>]*>/g, '').trim();
                        news_content = news_content
                                        .replace(/&#xA0;/g, '\n')  // Replace NBSP entities with newlines
                                        .replace(/&nbsp;/g, '\n')  // Also handle regular NBSP entities  // Replace NBSP entities with regular spaces
                    }
                    return {
                        ...article,
                        news_content: news_content
                    }
                })
            )

            response.data.results = processedArticles;
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

const classifiedNews = async() => {
    try {
        const newsData = await getNews();

        if (!newsData || newsData.status !== 'success') {
            return null;
        }

        const result = await Promise.all(
            newsData.results.map(async(news) => {
                const response = await classifyText(news.title);
                if (!response) {
                    return null;
                }
                const news_content = await Parser.parse(news.link);
                news_content = news_content.content.replace(/<[^>]*>/g, '').trim();
                console.log("Here are scores", news.title, response[0][0].score, response[0][1].score)
                const label = response[0][0].score > response[0][1].score ? 'liberal' : 'conservative';

                return {
                    ...news,
                    label: label,
                    news_content: news_content
                }
            })
        )
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { getNews, classifiedNews };