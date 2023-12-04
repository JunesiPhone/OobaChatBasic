const express = require('express');
const app = express();
app.listen(6969, () => console.log('running on port 6969'));

//json from post
app.use(express.json());

app.use(express.static('html'));