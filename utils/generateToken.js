const jsonwebtoken = require('jsonwebtoken')
const constants = require('../Constants/Constants')

const GenerateToken = (id) => {
    return jsonwebtoken.sign({ id }, constants.config.JWT_KEY, { "expiresIn": `${constants.config.EXPAIR_DATE}`})
}

module.exports = GenerateToken;