const { User } = require('../../../model/blog/user')

module.exports = async(req, res) => {
  req.app.locals.currentLink = 'user'
  let count = await User.countDocuments({})
  let page = req.query.page || 1
  let pagesize = 3
  let total = Math.ceil(count / pagesize)
  let start = (page - 1) * pagesize
  const users = await User.find({}).limit(pagesize).skip(start)
  res.render('blog/admin/user', {
    count,
    users,
    total,
    page
  })
}
