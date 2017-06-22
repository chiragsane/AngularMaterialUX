var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.use(function(req, res, next) {
    console.log('Someone hit api/authenticate');
    next();
});

router.route('/')
    .post(function(req, res) {
        User.getUserByName(req.body.username, function(err, user) {
            if (err)
                res.send(err)
            if (user)
                if (user.password === req.body.password)
                    res.json(user)
                else
                    res.json({ message: 'User invalid!' });
            if (!user)
                res.json({ message: 'User not found!' });
        })
    })

module.exports = router;