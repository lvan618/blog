const mongoose = require('mongoose')
const { User } = require('./user')
const { string } = require('joi')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 4,
    maxlength: 20,
    required: [true, '标题不要忘记']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: [true, '作者不要忘记']
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  cover: {
    type: String,
    default: null
  },
  content: {
    type: String
  }
})
const Article = mongoose.model('Article', articleSchema)
module.exports = {
  Article
}
