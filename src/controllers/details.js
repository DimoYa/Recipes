const data = require("../data/app-data");

module.exports = {
    async details(req, res) {
        const id = req.params.id;

        const recipe = data.findRecipeById(id);
        recipe.ingredientsArray = recipe.ingredients.split(',');
        res.render('recipe-details', { title: 'Recipe details', recipe });
    },
};