const axios = require('axios');
const config = require('../config/config');
const { classifyText } = require('./classificationService');

const getNews = async() => {
    const url = `${config.newsApi.baseUrl}?apikey=${config.newsApi.apiKey}&language=en`;
    try {
        const response = await axios.get(url);
        console.log("Coming here", response.date)
        if (response && response.status === 200) {
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
                console.log("Here are scores", news.title, response[0][0].score, response[0][1].score)
                const label = response[0][0].score > response[0][1].score ? 'liberal' : 'conservative';
                return {
                    ...news,
                    label: label
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