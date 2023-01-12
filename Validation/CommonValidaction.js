const Joi = require('@hapi/joi')

module.exports.signUpSchima = Joi.object().keys({
    email: Joi.string().required().email().lowercase(),
    username: Joi.string().alphanum().min(6).required(),
    password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirm_password: Joi.ref('password'),
    name: Joi.string().required(),
    phoneNo: Joi.string().required().min(10).max(10),
    dob: Joi.string().required(),
    userType: Joi.string().valid('user','admin')
})

module.exports.loginSchima = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
})

module.exports.userUpdate = Joi.object().keys({
    email: Joi.string().required().email(),
    username: Joi.string().alphanum().min(6).required(),
    password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirm_password: Joi.ref('password'),
    name: Joi.string().required(),
    phoneNo: Joi.string().required().min(10).max(10),
    dob: Joi.string().required(),
})