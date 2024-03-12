const data = require("../data/app-data");

module.exports = {
  async searchByKeyword(req, res) {
    model = { keyword: "" };
    if (req.query.keyword) {
      model.keyword = req.query.keyword;
      let recipes = data.findRecipesByKeyword(req.query.keyword);
      model.recipes = recipes;
    }

    res.render('search-recipes', { title: 'Search for a recipe', model});
  },

  async getResults(req, res) {
    let recipes = data.findRecipeByKeyword(req.params.keyword);
    let model = { recipes };
    res.render('recipe-list', model);
  },
};