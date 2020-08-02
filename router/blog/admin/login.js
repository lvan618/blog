const { User } = require('../../../model/blog/user')
const bcrypt = require('bcrypt')

module.exports = async(req, res) => {
  const { email, password } = req.body
  if(email.trim().length == 0 || password.trim().length == 0) {
    return res.status(400).render('blog/admin/error', { msg: '邮箱或密码错误' })
  }
  let user = await User.findOne({ email })
  if(user) {
    const isValid = await bcrypt.compare(password, user.password)
    if(isValid) {
      // res.send('ok')
      req.session.username = user.username
      req.app.locals.userInfo = user
      req.session.user = user
      
      // if(user.role == 'admin') {
      //   // 管理员权限
      //   res.redirect('/blog_admin/user');
      // } else {
      //   // 普通用户只有发布文章权限
      //   res.redirect('/blog_admin/article');
      // }
      req.app.locals.user2 = req.session.user
      res.redirect('/blog_home/index')
    }else {
      // 密码错误
      return res.status(400).render('blog/admin/error', { msg: '邮箱或密码错误' })
    }
  } else {
    // 没有查到
    return res.status(400).render('blog/admin/error', { msg: '邮箱或密码错误' })
  }
}
