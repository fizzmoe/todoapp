var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:fuck2you@ds141872.mlab.com:41872/todoapp',
{ useNewUrlParser: true });

module.exports = {mongoose};