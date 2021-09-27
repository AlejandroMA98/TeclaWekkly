const joi = require('joi');

module.exports = {
    loginModel : joi.object().keys({
        user: joi.string().alphanum().min(30).max(50).required(),
        password: joi.string().min(9).max(50).required()
    }).with('user','password')
}