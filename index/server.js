// JavaScript source code
var http = require('http');
var path = require('path');
var express = require('express');
var mysql = require('mysql');
var messages = require('../routes/messages');

var app = express();
var fs = require("fs");
var httpServer = http.createServer(app).listen(80, function () {
    console.log('http redirect server up and running at port 80');
});

app.use(express.static('public'));
app.use('/messages', messages);

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

app.get('/home', function (req, res) {
    res.sendFile(path.resolve(__dirname + "/../public/html/home.html"));
});


var connect = {
    host: "localhost",
    user: "root",
    password: "raspberry",
    database: "mooserisk"
};
var con = sql.createConnection(connect);

function addUser(name, email, isAdmin) {
    con.query("");

}
function addForm(file) {
    //parse file, then add to db
}
function loadRisks() {
    var content = fs.readFileSync("http://www.moosen.im/messages/risks");


};
