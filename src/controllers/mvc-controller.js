function setup(app, data) {
  app.get('/', function(req, res) {
    let recipes = data.getRecipes();
    let model = { recipes };
    res.render('home', model);
  });
}
module.exports = { setup };
