const { Article } = require('../../../model/blog/article')
const pagenation = require('mongoose-sex-page')

module.exports = async (req, res) => {
  req.app.locals.currentLink = 'article';

  const page = req.query.page || 1
  // console.log(req.session.user.role);
  if(req.session.user.role === "admin") {
    let article = await pagenation(Article).find().page(page).size(3).display(3).populate('author').exec()
    res.render('blog/admin/article', {
      article
    })
  } else {
    let article = await pagenation(Article).find({ email: req.session.user.email }).page(page).size(3).display(3).populate('author').exec()
    res.render('blog/admin/article', {
      article
    })
  }
}
