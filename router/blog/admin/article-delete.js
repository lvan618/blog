const { Article } = require('../../../model/blog/article')

module.exports = async (req, res) => {
  await Article.findOneAndDelete({ _id: req.query.id })
  res.redirect('/blog_admin/article')
}
