var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  Schema({
  id:Number,
  name:String,
  species:String,
  habitad:String
});

module.exports = mongoose.model('User', UserSchema);
