/************************************************************
 * Purpose : api calls takes place
 * 
 * @file : routes.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 *************************************************************/
const express = require('express');
const userCtrl = require('../controller/userController');
const router = express.Router();
router.post('/login',userCtrl.login);
router.post('/register',userCtrl.register);
module.exports = router;