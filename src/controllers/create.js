const data = require("../data/app-data");

module.exports = {
    get(req, res) {
        res.render('create', { title: 'Create recipe' });
    },
    async post(req, res) {
        let result = data.addRecipe(
            req.body.name, req.body.complexity,
            req.body.ingredients, req.body.description, req.body.imageUrl);
        if (result.errMsg) {
            let model = {
                name: req.body.name,
                complexity: req.body.complexity,
                ingredients: req.body.ingredients,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                errMsg: result.errMsg
            };
            return res.render('create', { title: 'Create recipe', ...model });
        } else {
            res.redirect('/recipes');
        }
    },
};
