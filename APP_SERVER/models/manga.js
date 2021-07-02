const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewer: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true,
        'default': 0,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.Now
    }
});

const mangaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    publication_year: Date,
    reviews: [reviewSchema]
});

mongoose.model('Manga', mangaSchema);