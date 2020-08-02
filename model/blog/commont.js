const mongoose = require('mongoose')
const commontSchema = new mongoose.Schema({
  // 文章id
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  },
  // 用户id
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  time: {
    type: Date
  },
  content: {
    type: String
  }
})
const Commont = mongoose.model('Commont', commontSchema)
module.exports = {
  Commont
}
