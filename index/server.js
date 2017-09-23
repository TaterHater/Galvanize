// JavaScript source code
var http = require('http');
var express = require('express');
var mysql = require('mysql');

var app = express();

var httpServer = http.createServer(app).listen(80, function () {
    console.log('http redirect server up and running at port 80');
});