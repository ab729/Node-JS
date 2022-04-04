const express = require('express');
const { redirect, send } = require('express/lib/response');
const res = require('express/lib/response');


//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests

app.listen(3000);
app.get('/', (req, res) => {

    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/main', (req, res) =>{
    //res.send('<p>hello world!!!</p>');
        res.sendFile('./views/about.html', {root: __dirname});
});

//redirect
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});

//error page
app.use((req, res) =>{
    res.sendFile('./views/404.html', {root: __dirname});
})
