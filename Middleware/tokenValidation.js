const asyncHandler = require('express-async-handler')
const Constants = require('../Constants/Constants')
const jwt = require('jsonwebtoken')
const CommonSchemaS = require('../Models/CommonModel')

module.exports.validateToken = asyncHandler(async (req, res, next) => {
    if (!req.headers.authorization || typeof req.headers.authorization === 'undefined') {
        res.status(401).send(Constants.CommonQueryMessage.MISSING_AUTH_TOKEN)
    } else if (req.headers.authorization.startsWith("Bearer")) {
        try {
            const decode = jwt.verify(req.headers.authorization.split('Bearer')[1].trim(), Constants.config.JWT_KEY)
            req.user = await CommonSchemaS.findById(decode.id).select("-password");
            next()
        } catch (error) {
            res.status(401).send(Constants.CommonQueryMessage.TOKEN_MISS_MATCHED)
        }
    } else {
        res.status(401).send(Constants.CommonQueryMessage.TOKEN_MISS_MATCHED)
    }
}) 