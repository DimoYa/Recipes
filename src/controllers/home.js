module.exports = {
  home(req, res) {
    res.render('home', {title: 'Welcome'});
  },
};