const mongoose = require('mongoose');
const manga = mongoose.model('Manga');

const getManga = (req, res) => {
    managa.find().exec((err , mangadata) =>{
        if(err){
            res.status(404).json(err);
            return;
        }
        res.status(200).json(mangadata);
    });
};

const createManga = (req, res) => {
    manga.create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        publication_year: req.body.publication_year
    }, (err, mangadata) => {
        if(err){
            res.status(404).json(err);
        }else{
            res.status(201).json(mangadata);
        }
    });
};

const getSingleManga = (req, res) => {
    const mangaid = req.params.mangaid;

    manga.findById(mangaid).exec((err, mangadata) => {
        if(!mangadata){
            return res.status(404).json({"message" : "mangadata not found"});
        }else if(err){
            return res.status(404).json(err);
        }
        res.status(200).json(mangadata);
    });
};

const updateManga = (req, res) => {
    const mangaid = req.params.mangaid;

    if(!mangaid){
        res.status(404).json({"message" : "Not Found, mangaid is required"});
        return;
    }

    manga.findById(mangaid).exec((err, mangadata) => {
        if(!mangadata){
            res.status(404).json({"message" : "mangaid not found"});
            return;
        }else if(err){
            res.status(400).json(err);
            return;
        }
        // fooddata.name = req.body.name;
        // fooddata.type = req.body.type;

        
        mangadata.title = req.body.title;
        mangadata.author = req.body.author;
        mangadata.description = req.body.description;
        mangadata.price = req.body.price;
        mangadata.publication_year = req.body.publication_year;
        mangadata.save((err, mangadata) => {
            if(err){
                res.status(404).json(err);
            }else{
                res.status(200).json(mangadata);
            }
        });
    });
};

const deleteManga = (req, res) => {
    const mangaid = req.params.mangaid;
    
    if(mangaid){
        manga.findByIdAndRemove(mangaid).exec((err, mangadata) => {
            if(err){
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        });
    }else{
        res.status(404).json({"message": "No mangaid"});
    }
};

module.exports = {
    getManga,
    createManga,
    updateManga,
    deleteManga,
    getSingleManga
}