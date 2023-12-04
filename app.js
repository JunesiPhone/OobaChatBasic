const express = require('express');
const { generateResponse } = require('./app_oobaController')
const app = express();
app.listen(6969, () => console.log('running on port 6969'));
app.use(express.json()); //json from post
app.use(express.static('html'));
app.post('/ooba/response', generateResponse);