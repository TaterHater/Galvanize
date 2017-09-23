// JavaScript source code
var http = require('http');
var path = require('path');
var request = require('request');
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
    res.sendFile(path.resolve(__dirname + "/../public/home.html"));
});

//mysql connection
var connect = {
    host: "localhost",
    user: "root",
    password: "raspberry",
    database: "mooserisk"
};
var con = mysql.createConnection(connect);

//adds user to database
function addUser(name, email, isAdmin) {
    con.query("insert into users (name,email,is_admin) values (?,?,0,?) ", [name, email, isAdmin]);
}


function httpInterface(host, path, method,data) {
    var options = {
        host: host,
        path: path,
        port: '80',
        method: method
    };
    try {
        callback = function (response) {
            var str = ''
            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                console.log(str);
            });
        }
        var req = http.request(options, callback);
        //This is the data we are posting, it needs to be a string or a buffer
        if(method === "post")
        req.write(data);
        req.end();
    } catch (e) {
        console.log(e);
    }
}

//httpInterface('http://www.moosen.im','/messages/sites','request',0);
//http get test
//require('http').get('http://www.moosen.im/messages/risks', (res) => {
//    res.setEncoding('utf8');
//    res.on('data', function (body) {
//        console.log(body);
//    });
//});

function addForm(file) {
    //parse file, then add to db
    var result;
    try {
        JSON.parse(file);

    }
    catch (e) {
        console.log(e);
    }
    var form = {
        id: file.id,
        site: file.site,
        uid: file.uid,
    };
}

function loadRisks() {

    //  var content;
    // $.getJSON('http://www.moosen.im/messages/risks', function (data) {
    // content = data;
    // });
    // console.log(content);
    //site cna have mine, processing plant, offices.
    // add location to user, and indiviual sites are the only thing we need to update. 
    //add image uploads to forms
    //randomize question order to keep users on their toes. 
    // have dashboard to change user info, and view stats

};




