const asyncHandler = require('express-async-handler')
const CommonSchemaS = require('../Models/CommonModel')
const GenerateToken = require('../utils/generateToken')
const constants = require('../Constants/Constants')
const CommonService = require('../Service/CommonService')
const FormatMongoData = require('../utils/MongoFormatData')

module.exports.Validator = asyncHandler(async (req, res) => {
    try {
        const ValidUser = await CommonService.validaUser(req.headers.authorization)
        res.status(201).json(FormatMongoData(ValidUser));
    } catch (error) {
        res.status(404).send(error.message.replace(/Error:/gi, '').trim())
    }
})

module.exports.SignUpUser = asyncHandler(async (req, res) => {
    const { email, username, password, name, phoneNo, dob, userType } = req.body;
    const UserNameExist = await CommonSchemaS.findOne({ username: username });
    if (UserNameExist) {
        res.status(400).send(constants.CommonQueryMessage.USER_EXIST('User Name', username));
        return
    }
    if (await CommonSchemaS.findOne({ email: email })) {
        res.status(400).send(constants.CommonQueryMessage.USER_EXIST('Email', email));
        return
    }

    const user = await CommonSchemaS.create({ email, username, password, name, phoneNo, dob, userType });
    if (user) {
        res.status(201).json({ _id: user._id, email: user.email, username: user.username, name: user.name, phoneNo: user.phoneNo, dob: user.dob, userType: user.userType, token: GenerateToken(user._id), });
    } else {
        res.status(404).send(constants.CommonQueryMessage.USER_NOT_CREATE);
    }

});

module.exports.LoginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const UserExist = await CommonSchemaS.findOne({ username });
    if (UserExist && (await UserExist.matchPassword(password))) {
        res.status(201).json({ _id: UserExist._id, email: UserExist.email, username: UserExist.username, name: UserExist.name, phoneNo: UserExist.phoneNo, dob: UserExist.dob, userType: UserExist.userType, token: GenerateToken(UserExist._id), })
    } else {
        res.status(401).send(constants.CommonQueryMessage.USER_INVALID_PASSWORD)
    }
})