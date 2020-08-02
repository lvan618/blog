const { User } = require('../../../model/blog/user')
const bcrypt = require('bcrypt')

module.exports = async(req, res, next) => {
  const { username, email, password, role, state } = req.body
  const id = req.query.id
  let user = await User.findOne({ _id: id })
  const isValid = await bcrypt.compare(password, user.password)
  if(isValid) {
    // 比对成功
    await User.updateOne({ _id: id }, {
      username: username,
      email: email,
      role: role,
      state: state
    })
    res.redirect('/blog_admin/user')
  } else {
    next(JSON.stringify({ path: '/blog_admin/user-edit', message: '密码比对失败，不能修改', id: id }))
  }
}
