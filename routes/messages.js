var express = require('express');
var router = express.Router();
var Mess = require('../models/messages'); 

router.get('/users/:id?', function (req, res, next) {
    if (req.params.id) {
        Mess.GetUser(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});



module.exports = router;
