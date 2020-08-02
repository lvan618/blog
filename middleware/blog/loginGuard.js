const guard = (req, res, next) => {
  if(req.url !== '/login' && !req.session.username) {
    res.redirect('/blog_admin/login')
  } else {
    next()
  }
}
module.exports = guard
