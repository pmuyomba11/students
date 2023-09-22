const express = require('express');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const PORT = process.env.PORT;
const Students = require('./models/students')
const methodOverride = require('method-override');
//Initialization..
const app = express();

//Middleware........
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

//Routes...
//Index
app.get('/students', (req, res) => {
    res.send(Students);
})

//Show
app.get('/students/:id', (req, res) => {
    res.render('show.ejs', {
        student: Students[req.params.id]
    })
})

//Port Listener.....
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server running on PORT: ${PORT}...`.inverse.bold.blue);
    console.log('====================================');
})