//Include Express
const express = require('express')
const app = express()

//Set port
const port = 3000

//Require express-handlebars
const exphbs = require('express-handlebars')
// Set template engine, use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Require restaurants data file
const restaurantList = require('./restaurants.json')

//Set static files path
app.use(express.static('public')) //--> all routes will go through this path first
//Set routes
app.get('/', (req, res) => {
  res.render('index', {restaurants: restaurantList.results})
})
//--Show each restaurant info
app.get('/restaurants/:restaurant_id', (req, res) => {
  // console.log('req params:', req.params)
  const restaurant = restaurantList.results.find(restaurant => {
    return restaurant.id.toString() === req.params.restaurant_id
  })
  res.render('show', {restaurant: restaurant})
})
//--Search form
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  let alertBox = 'hide'
  // prevent error: if type in spaces
  if (!keyword.length) {
    alertBox = 'show'
  }
  let showNoResults = false
  const filteredRestaurant = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  // show "No Results" page, if no item includes keyword
  if (filteredRestaurant.length === 0) {
    showNoResults = true
  }
  res.render('index', {restaurants: filteredRestaurant, keyword, alertMsg: alertBox, hasNoResults: showNoResults})
})

//Start and listen to app
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})