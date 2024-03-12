module.exports = {
    /**
     *
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     */
    async home(req, res) {
      res.render('home');
    },
  };