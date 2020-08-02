const formidable = require('formidable')
const path = require('path')
const { Article } = require('../../../model/blog/article')

module.exports = (req, res) => {
  const form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../../../', 'public/blog/upload')
  form.keepExtensions = true
  form.parse(req, async(err, fields, files) => {
    let cover = files.cover.path.split('public')[1]

    await Article.create({
      title: fields.title,
      author: fields.author,
      publishDate: fields.publishDate,
      cover: cover,
      content: fields.content
    })
    res.redirect('/blog_admin/article')
  })
}
