const { Article } = require('../../../model/blog/article')
const path = require('path')
const formidable = require('formidable')

module.exports = async(req, res) => {
  const articles = await Article.findOne({ _id: req.query.id })
  let imgsrc = articles.cover.replace(/\\/g, '/')
  
  const form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../../../', 'public/blog/upload')
  form.keepExtensions = true
  form.parse(req, async(err, fields, files) => {
    let aaa = files.cover.path
    const rg = /.jpg|.png/
    // let cover = files.cover.path.split('public\\blog')[1]
    let cover = rg.test(aaa) ? files.cover.path.split('public\\blog')[1] : articles.cover
    await Article.updateOne({ _id: req.query.id }, {
      title: fields.title,
      author: fields.author,
      publishDate: fields.publishDate,
      cover: cover,
      content: fields.content
    })
    res.redirect('/blog_admin/article')
  })
}
