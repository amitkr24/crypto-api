const express  = require('express');
const app      = express();
const port     = 8000;
const mongoose = require('./config/mongoose');

app.use(express.urlencoded()); //to parse form data

app.use('/',require('./route/index')); // use of router 

//create server
app.listen(port, function(err){
    if (err) {
        console.log('An error occured in running the server!');
        return;
    }
        console.log(`Server is up and running on PORT :: ${port}`);
})