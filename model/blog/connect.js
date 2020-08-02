const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://root:root@localhost:27017/blog2?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'))
