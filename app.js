const express = require('express');
const { generateResponse } = require('./app_oobaController')
const app = express(); // start express
app.listen(6969, () => console.log('Open browser to http://127.0.0.1:6969 <- or ctrl click that link on windows')); //open port
app.use(express.json()); //json from post
app.use(express.static('html')); //serve html folder
app.post('/ooba/response', generateResponse); //on post run generate response (app_oobaController.js)