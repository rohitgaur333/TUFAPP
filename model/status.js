//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var statusSchema = new mongoose.Schema({

	fbname:String,
	content: String,
	likes: Number,
	comments: Number
});

//return model:
module.exports = restful.model('tblstatus',statusSchema,"tblstatus");