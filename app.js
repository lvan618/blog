const express = require('express')
const router = express.Router()
const template = require('art-template')
const bodyParser = require('body-parser')
const session = require('express-session')
const dateformat = require('dateformat')
const path = require('path')
const app = express()

// 连接数据库
require('./model/blog/connect')

// post请求访问
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  secret: 'secret key'
}));
// 设置模板引擎
app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
// 静态资源访问
app.use(express.static(path.join(__dirname, 'public')))
template.defaults.imports.dateformat = dateformat

const { admin: blog_admin } = require('./router/blog/admin')
const { home: blog_home } = require('./router/blog/home')
const { date } = require('joi')

// 登录拦截
app.use('/blog_admin', require('./middleware/blog/loginGuard'))
app.use('/blog',blog_home)
app.use('/blog_admin', blog_admin)
app.use('/blog_home', blog_home)

// 错误拦截
app.use((err, req, res, next) => {
  const result = JSON.parse(err)
  let params = []
  for(let attr in result) {
    if(attr != 'path') {
      params.push(attr+'='+result[attr])
    }
  }
  res.redirect(`${result.path}?${params.join('&')}`)
})

app.listen(3000)
console.log('服务器创建成功');
