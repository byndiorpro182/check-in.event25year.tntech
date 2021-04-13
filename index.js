require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use(cors())
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))
app.use('/api', require('./src/api'))
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)
})