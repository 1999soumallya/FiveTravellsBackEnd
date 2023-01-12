const mongoose = require('mongoose')

const AirPortDetails = mongoose.Schema({
    City_Name: {
        type: String,
        required: true
    },
    Airport_Code: {
        type: String,
        required: true
    },
    Airport_Name: {
        type: String,
        required: true
    },
    Country_Name: {
        type: String,
        // required: true
    },
    Country_Abbrev: {
        type: String,
        required: true
    },
    World_Area_Code: {
        type: Number,
        required: true
    }
})

const AirPortDetailsModel = mongoose.model('AirPortDetailsModel', AirPortDetails)

module.exports = AirPortDetailsModel