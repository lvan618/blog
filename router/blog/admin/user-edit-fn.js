const { User, validateUser } = require('../../../model/blog/user')
const bcrypt = require('bcrypt')

module.exports = async(req, res, next) => {
  try {
    await validateUser(req.body)
  } catch (error) {
    return next(JSON.stringify({ path: '/blog_admin/user-edit', message: error.message }))
  }
  const user = await User.findOne({ email: req.body.email })
  if(user) {
    return next(JSON.stringify({ path: '/blog_admin/user-edit', message: '邮箱已存在' }))
  } else {
    let salt = await bcrypt.genSalt(10)
    let password = await  bcrypt.hash(req.body.password, salt)
    req.body.password = password
    await User.create(req.body)
    res.redirect('/blog_admin/user')
  }
}
