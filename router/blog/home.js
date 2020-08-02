const express = require('express')
const home = express.Router()

home.get('', require('./home/index'))
home.get('/index', require('./home/index'))
home.get('/article', require('./home/article'))
home.post('/commont', require('./home/commont'))


module.exports = {
  home
}
