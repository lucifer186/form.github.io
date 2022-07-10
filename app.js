const http = require('http')
const express = require('express')
const bodyParser = require('body-parser');
const path= require('path');

const cardRoute = require('./routes/card')

const app = express();



app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000
app.use(cardRoute)


// const server = http.createServer(app)

app.listen(3000, 
    ()=>console.log('Server running at http://127.0.0.1:3000/'));