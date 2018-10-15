//MakisBar 3.0 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

//Routes
require('./routes/index.routes.js')(app);

//Run server
app.listen(3000, ()=> {
    console.log('Corriendo en el puerto 3000.');
});