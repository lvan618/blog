const { func } = require("joi")

module.exports = (req, res) => {
  req.session.destroy(function() {
    res.clearCookie('connect.sid')
    // res.redirect('/blog_admin/login')
    req.app.locals.user2 = ''
    req.app.locals.userInfo = ''

    res.redirect('/blog_home/index')
  })
}
