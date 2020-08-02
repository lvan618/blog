const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  state: {
    // 启动0，禁止1
    type: Number,
    default: 0
  }
})
const User = mongoose.model('User', userSchema)

async function creatUser() {
  // 密码加密
  const salt = await bcrypt.genSalt(10)
  const pass = await bcrypt.hash('123456', salt)
  // 插入用户
  const user = await User.create({
    username: 'lvan2',
    email: 'lvan2@126.com',
    password: pass,
    role: 'normal',
    state: 0
  }).then(() => console.log('插入用户成功'))
}
// creatUser()

const validateUser = user => {
  const schema = {
    username: Joi.string().min(2).max(20).required().error(new Error('用户名不符合验证规则')),
    email: Joi.string().email().required().error(new Error('邮箱不符合验证规则')),
    password: Joi.string().regex(/^[\w]{3,20}$/).required().error(new Error('密码不符合验证规则')),
    role: Joi.string().valid('admin', 'normal').required().error(new Error('角色不符合验证规则')),
    state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
  }
  return Joi.validate(user, schema)
}

module.exports = {
  User,
  validateUser
}
