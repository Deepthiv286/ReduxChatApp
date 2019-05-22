/************************************************************
 * Purpose : To configure mongodb
 * 
 * @description
 * @file : server.js
 * @overview : Export mongodb url.
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 *************************************************************/
/**
 * exporting mongodb url
 */
require("dotenv").config();
module.exports = {
url: process.env.MONGODB_IP
//url: process.env.MONGODB_PRIVATE_IP

};