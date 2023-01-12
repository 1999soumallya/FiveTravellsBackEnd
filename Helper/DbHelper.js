const jwt = require('jsonwebtoken')
const Constants = require('../Constants/Constants')

module.exports.getDetaFromJwt = (token) => {
    if (!token) return false
    try {
        return jwt.verify(token.split('Bearer')[1].trim(), Constants.config.JWT_KEY)
    } catch (error) {
        return false
    }
}