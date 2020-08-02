const express = require('express')
const admin = express.Router()

admin.get('/login', require('./admin/loginPage'))
admin.post('/login', require('./admin/login'))
admin.get('/user', require('./admin/userPage'))
admin.get('/loginout', require('./admin/loginout'))

admin.get('/user-edit', require('./admin/user-edit'))
admin.post('/user-edit', require('./admin/user-edit-fn'))
admin.post('/user-modify', require('./admin/user-modify'))
admin.get('/user-delete', require('./admin/user-delete'))

admin.get('/article', require('./admin/article'))
admin.get('/article-edit', require('./admin/article-edit'))
admin.post('/article-edit', require('./admin/article-edit-fn'))
admin.post('/article-modify', require('./admin/article-modify'))
admin.get('/article-delete', require('./admin/article-delete'))
module.exports = {
  admin
}
