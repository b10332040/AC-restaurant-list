// 設定/使用 express 框架 //////////////////////////////////////
const express = require('express')
const app = express()

// 設定/使用 template engine (handelbars) //////////////////////
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定 static file ///////////////////////////////////////////
app.use(express.static('public'))

// 引入資料 ///////////////////////////////////////////////////
const restaurantList = require('./restaurant.json')
const restaurantMap = {}

restaurantList.results.forEach((restaurant) => {
  restaurantMap[restaurant.id] = restaurant
})

// 設定 routes ///////////////////////////////////////////////
// 首頁
app.get('/', (req, res) => {
  const restaurants = restaurantList.results
  res.render('index', {restaurants: restaurants})
})
// 搜尋結果頁
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  const restaurants = restaurantList.results.filter((restaurant) => {
    return (restaurant.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) || restaurant.category.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
  })
  res.render('index', {restaurants: restaurants, keyword: keyword})
})
// 餐廳介紹頁
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurantId = Number(req.params.restaurant_id)
  const restaurant = restaurantMap[restaurantId]
  res.render('show', {restaurant: restaurant})
})

// 啟動/監聽伺服器 ////////////////////////////////////////////
const port = 3000
app.listen((port), () => {
  console.log(`Express is running on http://localhost:${port}`)
})