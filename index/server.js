// JavaScript source code
var http = require('http');
var express = require('express');
var mysql = require('mysql');

var app = express();

var httpServer = http.createServer(app2).listen(80, function () {
    console.log('http redirect server up and running at port 80');
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "raspberry",
    database: "mooserisk"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});