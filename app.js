const express = require('express');
const { path } = require('express/lib/application');
const { redirect, send } = require('express/lib/response');
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
app.use(morgan('dev'));


// app.use((req, res, next) =>{
//     console.log('new request made');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ',req.method);
//     next();
// });
//the prevois code is an example to the middleware

app.get('/add-blog', (req, res)=> {
    const blog = new Blog({
        title: 'newblog 2',
        snippet: 'about the new blog',
        body: 'details about the blog'
    });

    blog.save()
    .then((result) => {
            res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    });
});

app.get('/all-blogs', (req, res) =>{
    Blog.find()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/single-blog', (req, res) =>{
    Blog.findById('624af3cdcd5b4b9cc5a38a2b')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});


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