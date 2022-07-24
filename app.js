// 設定/使用 express 框架 //////////////////////////////////////
const express = require('express')
const app = express()

// 設定/使用 template engine (handelbars) //////////////////////
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定 static file ///////////////////////////////////////////
app.use(express.static('public'))

// 設定 routes ///////////////////////////////////////////////
// 首頁
app.get('/', (req, res) => {
  res.render('index')
})
// 餐廳介紹頁
app.get('/restaurants/:id', (req, res) => {
  res.render('show')
})

// 啟動/監聽伺服器 ////////////////////////////////////////////
const port = 3000
app.listen((port), () => {
  console.log(`Express is running on http://localhost:${port}`)
})