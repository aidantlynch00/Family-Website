const path = require('path');

var express = require('express');
var app = express();

var testRouter = require('./routes/test');

//app.use(express.static(path.join(__dirname, '../client/src')));
app.use('/test', testRouter);

app.listen(5000, () => console.log('Listening on port 5000'));