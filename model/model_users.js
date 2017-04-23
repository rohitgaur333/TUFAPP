var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var userSchema = mongoose.Schema({

	mobile:	String,
	email:String,
	pwd:String,
	fname:String,
	lname:String,
	status:String
	
});

//return model:
module.exports = restful.model('User',userSchema,"tblusr");


