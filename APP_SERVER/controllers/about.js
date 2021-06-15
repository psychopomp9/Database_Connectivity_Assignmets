// render about.pug with title
const about = (req, res) => {
    res.render('about', {title: 'About my site.'});
};

module.exports = {
    about
}