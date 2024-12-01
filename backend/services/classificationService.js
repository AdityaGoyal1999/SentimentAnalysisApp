const axios = require('axios');
const config = require('../config/config'); // Assuming config holds your Hugging Face API token

const classifyText = async(text) => {
    const url = config.huggingFace.baseUrl;
    const headers = {
        Authorization: `Bearer ${config.huggingFace.apiKey}`, // Add your Hugging Face API Key here
    };

    try {
        // Make POST request to Hugging Face API
        const response = await axios.post(
            url, { inputs: text }, // Sending the text as input
            { headers } // Passing authentication headers
        );


        if (response && response.status === 200) {
            return response.data;
        }
    } catch (error) {
        // console.error("Error calling Hugging Face API:", error.response ? .data || error.message);
        console.error(error);
        return null;
    }
};

module.exports = { classifyText };