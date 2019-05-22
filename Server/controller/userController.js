/************************************************************
 * Purpose : user controller with express validator
 * 
 * @file : userController.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 *************************************************************/
const userService = require('../services/service');
const jwt = require('jsonwebtoken');
// const genToken = require('../middleware/token');
// const sendMail = require('../middleware/sendMail');

module.exports.register = (req, res) => {
    try {
        req.checkBody('firstName', 'First name is not valid').isLength({ min: 3 }).isAlpha();
        req.checkBody('lastName', 'Last name is not valid').isLength({ min: 1 }).isAlpha();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is not valid').isLength({ min: 8 });
        req.checkBody('confirmPassword', 'Confirm password is not valid').equals(req.body.password);
        let errors = req.validationErrors();
        let response = {};
        if (errors) {
            console.log(errors);
            response.success = false;
            response.error = errors;
            return res.status(401).send(response);
        }
        else {
            userService.register(req.body, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    });
                }
                else {
                    return res.status(200).send({
                        message: data
                    });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports.login = (req, res) => {
    try {
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('password', 'Password is not valid').isLength({ min: 8 });
        let secretKey = "abcde";
        let errors = req.validationErrors();
        let response = {};
        if (errors) {
            console.log(errors);
            response.success = false;
            response.error = errors;
            return res.status(401).send(response);
        }
        else {
            userService.login(req.body, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    });
                }
                else {
                    let token = jwt.sign({ email: req.body.email, id: data[0]._id }, secretKey, { expiresIn: 604800 });
                    return res.status(200).send({
                        message: data,
                        "token": token
                    });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}