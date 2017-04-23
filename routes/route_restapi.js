var express = require('express');
var router = express.Router();



//get User Model :
var User = require('../model/model_users');

//set and register user routes as "/user" :
User.methods(['get','post','put','delete']);
User.register(router, '/user');

User.route('/userc', function(req, res, next) {
  res.send('I have a recommendation for you!');
});




//get Status Model:
var Status = require('../model/status');

//set and register  routes as "/status" :
Status.methods(['get','post','put','delete']);
Status.register(router, '/status');




//return router for all the regsitered models
module.exports = router;

