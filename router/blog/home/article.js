const { Article } = require('../../../model/blog/article')
const { Commont } = require('../../../model/blog/commont')

module.exports = async (req, res) => {
  const id = req.query.id
  // findOne查询得是对象格式，find查询的是数组形式
  const article = await Article.findOne({ _id: id }).populate('author')
  const commont = await Commont.find({ aid: id }).populate('uid')
  res.render('blog/home/article.art', {
    article,
    commont
  })
}
