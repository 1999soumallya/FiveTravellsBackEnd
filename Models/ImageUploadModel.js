const mongoose = require('mongoose')

const ImageUploadSchima = mongoose.Schema({
    ImageName: {
        type: String,
        required: true
    },
    ImagePath: {
        type: String,
        required: true
    }
}, { timestamps: true, })

const ImageUploadModel = mongoose.model('ImageUploadModel', ImageUploadSchima)

module.exports = ImageUploadModel