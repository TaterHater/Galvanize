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
router.get('/risks', function (req, res, next) {
    if (req.params.id) {
        Mess.GetRisk( function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/sites', function (req, res, next) {
    if (req.params.id) {
        Mess.GetRisk(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/getform/:site?', function (req, res, next) {
    if (req.params.id) {
        Mess.GetformBySite(req.params.site, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


module.exports = router;
