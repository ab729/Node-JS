const express = require('express');
const { path } = require('express/lib/application');
const { redirect, send, render, json } = require('express/lib/response');
const res = require('express/lib/response');
const { create, result } = require('lodash');
const morgan = require('morgan');



//express app
const app = express();
const morgam = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog.js')

//connect to mongo db
const web = 'mongodb+srv://nodeuser:node1234@cluster0.4zxou.mongodb.net/node_users?retryWrites=true&w=majority';
mongoose.connect(web, { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result) => console.log('connecting to Mongo DB succesed'), app.listen(3000))
 .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');
app.set('views', 'ejs views'); 
// this code used to open a folder that you keep views in


// app.listen(3000);
//listen for requests 

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));



app.get('/', (req, res) => {
    res.redirect('/blogs');
        
});

app.get('/about', (req, res) =>{
    //res.send('<p>hello world!!!</p>');
        // res.sendFile('./views/about.html', {root: __dirname});
        res.render('about', {title: 'info'});
});

//blog routes
app.get('/blogs', (req, res) =>{
    Blog.find().sort({createdAt: -1})
        .then((result) =>{
                res.render('index', {title: 'All Blogs', blogs: result })
        })
        .catch((err) =>{
            console.log(err);
        })
});

app.post('/blogs', (req, res) =>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
     .catch((err)=>{
         console.log(err);
     })
});


app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'create'});
});

//redirect
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'blog details'});
        })
        .catch(err => {
            console.log(err);
        })
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
        Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs'})
        })
        .catch(err => {
            console.log(err);
        });
});

//error page
app.use((req, res) =>{
    // res.sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'})
});