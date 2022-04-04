const express = require('express');
const { redirect, send } = require('express/lib/response');
const res = require('express/lib/response');
const { create } = require('lodash');


//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
app.set('views', 'ejs views');
// this code used to open a folder that you keep views in


//listen for requests

app.listen(3000);
app.get('/', (req, res) => {

    //res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname});
    //as long as we used ejs method instead of noraml html we change to render method
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'home', blogs: blogs});
});

app.get('/about', (req, res) =>{
    //res.send('<p>hello world!!!</p>');
        // res.sendFile('./views/about.html', {root: __dirname});
        res.render('about', {title: 'info'});
});

app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'create'});
});

//redirect
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});

//error page
app.use((req, res) =>{
    // res.sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'})
});
