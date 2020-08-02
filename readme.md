### 一、打开项目首先执行 npm install 下载依赖

#### 如果本地的mongodb没有设置账号密码，可以打开model文件夹下的connect.js文件

把以下代码更换为：

```js
mongoose.connect('mongodb://root:root@localhost:27017/blog2?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'))
```

```js
mongoose.connect('mongodb://localhost:27017/blog2', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'))
```

### 二、运行项目

#### 1.打开model/user.js文件，把以下代码取消注释

```js
// creatUser()
```

​	在这个model目录下打开命令行工具，输入node user.js,向数据库里添加用户

#### 2.在根目录下打开命令行工具，输入nodemon app.js,运行项目

### 三、功能描述

#### 1.启动项目

然后浏览器中输入：http://localhost:3000/blog 默认跳转到博客前台

![image-20200802151313829](C:\Users\85114\AppData\Roaming\Typora\typora-user-images\image-20200802151313829.png)

#### 2.登录项目

在这里可以点击右上角登录：邮件*lvan@126.com*，密码*123456*，登录后跳转到博客前台

![image-20200802151731271](C:\Users\85114\AppData\Roaming\Typora\typora-user-images\image-20200802151731271.png)

#### 3.写文章

点击博客前台页面右上 写文章，如果账号为管理员，则控制面板如下：

如果为普通用户，则没有用户管理页面，文章管理只显示自己的文章

![](E:\新桌面\1.gif)

