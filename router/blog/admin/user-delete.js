const { User } = require('../../../model/blog/user')

module.exports = async (req, res) => {
  await User.findOneAndDelete({_id: req.query.id})
  res.redirect('/blog_admin/user')
}
