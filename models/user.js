const mongoose = require("mongoose");
const passport = require("passport");

const UserSchema = new mongoose.Schema({
    username: {type:String, required: true, unique: true},
    password: {type:String, required: true}
});

module.exports = mongoose.model('User', UserSchema);