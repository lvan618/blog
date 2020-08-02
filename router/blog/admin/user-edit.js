const { User } = require('../../../model/blog/user')

module.exports = async(req, res) => {
  req.app.locals.currentLink = 'user'
  const { id, message } = req.query
  if(id) {
    // 修改页面
    let users = await User.findOne({ _id: id })
    res.render('blog/admin/user-edit', {
      users,
      message,
      link: '/blog_admin/user-modify?id='+id,
      button: '修改'
    })
  } else {
    res.render('blog/admin/user-edit', {
      message,
      link: '/blog_admin/user-edit',
      button: '添加'
    })
  }
}
