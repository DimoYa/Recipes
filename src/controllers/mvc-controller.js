function setup(app, data) {
  app.get('/', function(req, res) {
    let recipes = data.getRecipes();
    let model = { recipes };
    res.render('home', model);
  });

  app.get('/recipes', function(req, res) {
    let recipes = data.getRecipes();
    let model = { recipes };
    res.render('recipes', model);
  });

  app.get('/recipes/create', function(req, res) {
      let model = {
        name: "",
        complexity: "",
        ingredients: "", 
        description: "",
        imageUrl: "", 
      };
      res.render('create-recipe', model);
  });

  app.post('/recipes/create', function(req, res) {
    let result = data.addRecipe(
      req.body.name, req.body.complexity,
      req.body.ingredients, req.body.description, req.body.imageUrl);
    if (result.errMsg) {
      let model = {
        name: req.body.name, complexity: req.body.complexity,
        ingredients: req.body.ingredients, description: req.body.description, imageUrl: req.body.imageUrl,
        errMsg: result.errMsg
      };
      return res.render('create-recipe', model);
    } else {
      res.redirect('/recipes');
    }
  });

  app.get('/recipes/search', function(req, res) {
    model = { keyword: "" };
    if (req.query.keyword) {
      model.keyword = req.query.keyword;
      let recipes = data.findRecipesByKeyword(req.query.keyword);
      model.recipes = recipes;
    }

    res.render('search-recipes', model);
  });

  app.get('/recipes/:id', function(req, res) {
    let recipe = data.findRecipeById(req.params.id);
    if (recipe.errMsg) {
      model = {errText: 'recipe Not Found', 
        errDetails: recipe.errMsg};
      res.render('error', model);
    }
    else { 
      let model = { recipe };
	    res.render('recipe-details', model);
    }
  });

  app.get('/recipes/find/:keyword', function(req, res) {
    let recipes = data.findRecipeByKeyword(req.params.keyword);
    let model = { recipes };
	  res.render('recipes', model);
  });
}

module.exports = { setup };
