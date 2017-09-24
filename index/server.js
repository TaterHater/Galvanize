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

function leaderboard(board) {
    con.query("SELECT * FROM ( SELECT * FROM users ORDER BY score DESC LIMIT 10) sub ORDER BY  score ASC", function (row, error) {

        row.forEach(function (data) {
            board.push(data);
        });
        return board;
    });


}

function getInfo(path,callback) {

    return http.get({
        host: 'moosen.im',
        path: path
    }, function (response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            console.log(body);
                
        });
    });

}


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




