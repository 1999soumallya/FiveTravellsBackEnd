const asynchandler = require('express-async-handler')
const Constants = require('../Constants/Constants')
const DbHelper = require('../Helper/DbHelper')
const User = require('../Models/CommonModel')

module.exports.validaUser = asynchandler(async (token) => {
    try {
        let payload = DbHelper.getDetaFromJwt(token)
        if (!payload) {
            throw new Error(Constants.CommonQueryMessage.TOKEN_MISS_MATCHED)
        }
        let userData = await User.findById(payload.id).select("-password")

        if (userData) {
            return userData
        }

    } catch (error) {
        throw new Error(error)
    }
})