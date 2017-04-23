var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//var User     = mongoose.model( 'User' );
//connec to mongoose 

//var userdetails = require('../routes/route_user');
/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.send("Rohit Gaur");
	  //res.render('index', { title: 'Express' });
	 
});



//mongoose.model('testtable',{fname:String},'testtable');


//////////////Working Fine to get Users ////////////////////



module.exports = router;