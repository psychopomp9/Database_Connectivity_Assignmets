const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

// display list of manga from database
const listData = (req, res) => {
    const path = '/api/mangas';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderListpage(req, res, body);
        }
    );
};

// renders list-display.pug page
const _renderListpage = (req, res, responseBody) => {
    res.render('list-display', {
        title: 'List of Manga',
        mangas: responseBody
    });
};


// displaying details of a single manga
const _renderDetailPage = (req, res, responseBody) => {
    console.log(responseBody);
    res.render('details', {
        currentManga: responseBody
    });
};

const mangaInfo = (req, res) => {
    console.log(req.params.mangaid);
    const path = `/api/mangas/${req.params.mangaid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};

// render create page
const _renderCreatePage = (req, res) => {
    res.render('create', {
        title: "Create New Manga"
    });
};

const addNewManga = (req, res) => {
    _renderCreatePage(req, res);
};

const doAddNewManga = (req, res) => {
    const path = '/api/mangas';
    const postdata = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        publication_year: req.body.publication_year

    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata 
    };
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 201){
                res.redirect('/');
            }
        }
    );
};

module.exports={
    listData,
    mangaInfo,
    doAddNewManga,
    addNewManga
}