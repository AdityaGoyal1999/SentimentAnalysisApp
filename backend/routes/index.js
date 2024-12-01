var express = require('express');
var router = express.Router();
var newsService = require('../services/newsService');
// var classificationService = require('../services/classificationService');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/get-news', async(req, res, next) => {
    try {
        const news = await newsService.getNews();
        res.status(200).json(news)
    } catch (error) {
        console.error(error)
    }
})

router.get('/classify-text', async(req, res, next) => {
    const news = await newsService.classifiedNews();
    res.status(200).json(news);
})

module.exports = router;