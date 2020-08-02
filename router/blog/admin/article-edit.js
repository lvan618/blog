const { Article } = require('../../../model/blog/article')

module.exports = async (req, res) => {
  const { id } = req.query
  if(id) {
    // 修改
    let article = await Article.findOne({ _id: id })
    let imgsrc = article.cover.replace(/\\/g, '/')
    // article.publishDate = dateformat(article.publishDate, 'yyyy-mm-dd')
    res.render('blog/admin/article-edit', {
      article,
      imgsrc,
      link: '/blog_admin/article-modify?id=' + id,
      button: '修改'
    })
  }else {
    // 添加
    res.render('blog/admin/article-edit', {
      link: '/blog_admin/article-edit',
      button: '添加'
    })
  }
}
