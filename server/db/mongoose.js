var mongoose = require('mongoose');
var uri = process.env.MONGODB_URI;
mongoose.connect(uri.toString());

module.exports = {
	mongoose
};