const { Article } = require('../../../model/blog/article')
const pagenation = require('mongoose-sex-page')

module.exports = async (req, res) => {
  const page = req.query.page || 1
  let result = await pagenation(Article).page(page).size(4).display(5).find().populate('author').exec()
  res.render('blog/home/default', {
    page,
    result
  })
}
