
var sql = require('mysql');
var connect = {
    host: "localhost",
    user: "root",
    password: "raspberry",
    database: "mooserisk"
};
module.exports = connect;
var con = sql.createConnection(connect); 
var messages = {

    GetUser: function (id, callback) {
        return con.query("SELECT * FROM users WHERE id = ?", [id], callback);
    },
    GetRisk: function (input, callback) {
        return con.query("SELECT * FROM risks WHERE name LIKE {?}", [input], callback);
    },



};
module.exports = messages;
