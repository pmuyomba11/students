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
    res.render('index.ejs', {
        students: Students
    })
})
//New..
app.get('/students/new', (req, res) => {
    res.render('new.ejs')
})

//Delete
app.delete('/students/:id', (req, res) => {
    Students.splice(req.params.id, 1);
    res.redirect('/students')
})

//Update
app.put('/students/:id', (req, res) => {
    if(req.body.passed ==='on'){
        req.body.passed = true
    } else {
        req.body.passed = false
    }
    Students[req.params.id] = req.body;
    res.redirect('/students')
})


//Edit
app.get('/students/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        student :Students[req.params.id],
        index: req.params.id
    })
   
})


//Create..
app.post('/students', (req, res) => {
   if(req.body.passed === 'on'){
    req.body.passed = true
   } else {
    req.body. passed = false
   }

    Students.push(req.body);
    res.redirect('/students')
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