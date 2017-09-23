
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
    GetRisk: function (callback) {
        return con.query("SELECT * FROM risks", callback);
    },
    GetSites: function (callback) {
        return con.query("SELECT * FROM sites", callback);
    },
    GetFormBySite: function (site, callback) {
        return con.query("SELECT * From form where site = ?", [site], callback);
    },


};
module.exports = messages;
