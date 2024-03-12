const data = require("../data/app-data");

module.exports = {
    /**
     *
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     */
    async recipes(req, res) {
        let recipes = data.getRecipes();
        res.render('recipe-list', { title: 'Recipe list', recipes });
    },
};