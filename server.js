var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AM_UX');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

var User = require('./models/user');

router.use(function(req, res, next) {
    console.log('Got a request!');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API connected sucessfully!' });
});

router.route('/users')
    .post(function(req, res) {
        var user = new User();
        user.name = req.body.name;
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'User created!' });
        });
    })
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);
            res.json(users);
        });
    });

router.route('/users/:user_id')
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    .put(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            user.name = req.body.name;
            user.username = req.body.username;
            user.password = req.body.password;
            user.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'User updated!' });
            });
        });
    })
    .delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    });

app.use('/api', router);

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App started on ${port}`);
});