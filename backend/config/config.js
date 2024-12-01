require('dotenv').config()

module.exports = {
    newsApi: {
        baseUrl: 'https://newsdata.io/api/1/latest',
        apiKey: process.env.NEWS_API_KEY
    },
    huggingFace: {
        baseUrl: `https://api-inference.huggingface.co/models/${process.env.HUGGINGFACE_USERNAME}/distilbert-news-classifier`,
        apiKey: process.env.HUGGINGFACE_API_KEY
    }

}