const mongoose = require('mongoose')

const Fileuploadschima = mongoose.Schema({
    AIRLINE_LOGO: {
        type: String,
        required: true
    },
    LOGO: {
        type: String,
        required: true
    },
    FORM: {
        type: String,
        required: true
    },
    SECTOR: {
        type: String,
        required: true
    },
    DEPARTURE_DATE: {
        type: Date,
        required: true
    },
    DEPARTURE_TIME: {
        type: String,
        required: true
    },
    FLIGHT_DERATION_AND_LAYOVER: {
        type: String,
        required: true
    },
    ARRIVAL_TIME: {
        type: String,
        required: true
    },
    TOTAL_SEATS: {
        type: Number,
        required: true
    },
    SEATS_AVAILABLE: {
        type: Number,
        required: true
    },
    SEATS_SOLD: {
        type: Number,
        required: true
    },
    PRICE: {
        type: Number,
        required: true
    }
}, { timestamps: true, })

const FileUploadModel = mongoose.model('Fileupload', Fileuploadschima)

module.exports = FileUploadModel
