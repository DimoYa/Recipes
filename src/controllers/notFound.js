module.exports = {
    /**
     *
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     */
    notFound(req, res) {
      res.render('404', {title: 'Page not found'});
    },
  };