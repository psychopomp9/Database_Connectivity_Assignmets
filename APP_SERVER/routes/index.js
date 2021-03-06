var express = require('express');
var router = express.Router();
var ctrlAbout = require('../controllers/about'); //about controller
var ctrlListData = require('../controllers/list_data'); //list_dat controller

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Manga-Planet'})
});

// about page
router.get('/about', ctrlAbout.about);

// list page
router.get('/list', ctrlListData.listData);

// Details page
router.get('/list/:mangaid', ctrlListData.mangaInfo);

// create new entry page 
router.route('/new')
    .get(ctrlListData.addNewManga) 
    .post(ctrlListData.doAddNewManga);

module.exports = router;
