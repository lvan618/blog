const { Commont } = require('../../../model/blog/commont')

module.exports = async (req, res) => {
  const { aid, uid, content } = req.body
  await Commont.create({
    content: content,
    uid: uid,
    aid: aid,
    time: new Date()
  })
  res.redirect('/blog_home/article?id=' + aid);
}
