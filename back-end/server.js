const express = require('express')
const path = require('path')

const app = express();


const route = require(path.join(__dirname, 'routes', 'routes.js'))

app.use('/',route)

app.listen(3000)