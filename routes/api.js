var express = require('express');
var router = express.Router();

//get Models:
var Status = require('../model/status');

//routes :
Status.methods(['get','post','put','delete']);
Status.register(router, '/status');

//console.log('From Api.js');
//return router
module.exports = router;