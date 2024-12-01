const axios = require('axios');
const config = require('../config/config');

const getNews = async() => {
    const url = `${config.newsApi.baseUrl}?apikey=${config.newsApi.apiKey}&language=en`;
    try {
        const response = await axios.get(url);
        if (response && response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { getNews };