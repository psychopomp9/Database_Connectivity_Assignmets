const express = require('express');
const router = express.Router();

const ctrlManga = require('../controllers/manga');

router.route('/mangas')
    .get(ctrlManga.getManga)
    .post(ctrlManga.createManga);

router.route('/mangas/:mangaid')
    .get(ctrlManga.getSingleManga)
    .put(ctrlManga.updateManga)
    .delete(ctrlManga.deleteManga);

module.exports = router;