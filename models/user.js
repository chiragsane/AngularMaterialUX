var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    username: String,
    password: String
});

const user = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByName = function(username, callback) {
    const query = { username: username };
    user.findOne(query, callback);
}