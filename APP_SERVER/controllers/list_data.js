// render list-display.pug with title and mangas array
const listData = (req, res) => {
    res.render('list-display', {
        title: 'List of Manga',
        mangas: [{
            title: 'SPY x FAMILY',
            author: 'Tatsuya ENDO',
            price: '¥502',
            publication_year: '2019'
        },{
            title: 'Love Me, Love Me Not',
            author: 'Io SAKISAKA',
            price: '¥460',
            publication_year: '2015'
        },{
            title: 'Monster #8',
            author: 'Naoya MATSUMOTO',
            price: '¥502',
            publication_year: '2020'
        }]
    });
};

module.exports={
    listData
}