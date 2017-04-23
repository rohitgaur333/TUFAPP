var express = require('express');
var router = express.Router();

//get User Model:
var User = require('../model/model_users');

//set and register user routes  :
User.methods(['get','post','put','delete']);
User.register(router, '/userdetail');


//get Status Model:
var Status = require('../model/status');

//set and register  routes  :
Status.methods(['get','post','put','delete']);
Status.register(router, '/status');




//return router for all the regsitered models
module.exports = router;

