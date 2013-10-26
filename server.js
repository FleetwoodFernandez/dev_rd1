// small server app to run via node
var http = require('http');
var express = require('express');
var ecstatic = require('ecstatic');

var app = express();
app.use(ecstatic({ root: __dirname }));
http.createServer(app).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');