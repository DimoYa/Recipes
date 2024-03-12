module.exports = {
    /**
     *
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     */
    async get(req, res) {
        const id = req.params.id;
        const data = await req.storage.getById(id);


        let recipe = data.findRecipeById(req.params.id);
        if (recipe.errMsg) {
            model = {
                errText: 'recipe Not Found',
                errDetails: recipe.errMsg
            };
            res.render('error', model);
        }
        else {
            let model = { recipe };
            res.render('recipe-details', model);
        }
    },
};