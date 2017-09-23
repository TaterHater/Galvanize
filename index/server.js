// JavaScript source code
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var messages = require('../routes/messages');

var app = express();

var httpServer = http.createServer(app).listen(80, function () {
    console.log('http redirect server up and running at port 80');
});

app.use('/messages', messages);

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
});

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
});
