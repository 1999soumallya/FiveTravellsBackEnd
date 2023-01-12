const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const CommonSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
}, { timestamps: true, })

//MiddleWare for Password
CommonSchema.pre("save", async function (req, res, next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt)
})

CommonSchema.methods.matchPassword = async function (enterPassword) {
    return await bcryptjs.compare(enterPassword, this.password);
};

const CommonSchemaS = mongoose.model('CommonSchemaModel', CommonSchema)

module.exports = CommonSchemaS
