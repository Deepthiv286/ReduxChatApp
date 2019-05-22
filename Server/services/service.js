/************************************************************
 * Purpose : user service 
 * 
 * @file : service.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 *************************************************************/
const model = require('../model/userModel');

exports.login = (req, callBack) => {
    model.login(req, (err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}
exports.register = (req, callBack) => {
    model.register(req, (err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}