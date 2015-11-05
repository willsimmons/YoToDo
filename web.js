var express = require('express');
var zippon = require('gzippo');
var app = express();

app.use('/static', express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 5000);
