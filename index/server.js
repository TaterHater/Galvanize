// JavaScript source code
var http = require('http');
var path = require('path');
var fs = require('fs');
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

function addUser(name, email, isAdmin) {
    con.query("insert into users (name,email,is_admin) values (?,?,0,?) ", [name, email, isAdmin]);

}
function addForm(file) {
    //parse file, then add to db
}
function loadRisks() {
    var content = fs.readFileSync("http://www.moosen.im/messages/risks");

    //site cna have mine, processing plant, offices.
    // add location to user, and indiviual sites are the only thing we need to update. 
    //add image uploads to forms
    //randomize question order to keep users on their toes. 
};

var con = mysql.createConnection(connect); 

