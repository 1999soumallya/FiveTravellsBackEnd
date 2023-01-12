const mongoose = require('mongoose')

const PreBookingFlightSchima = mongoose.Schema({
    emailid: {
        type: String,
        required: true
    },
    flightdetails: {
        type: String,
        required: true
    },
    flightDate: {
        type: String,
        required: true
    },
    flightroute: {
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
    Adult: {
        type: String,
        required: true
    },
    Child: {
        type: String,
        required: true
    },
    Infant: {
        type: String,
        required: true
    },
    bookingtype: {
        type: String,
        required: true,
        default: 'Pre Flight Booking'
    }
})

const PreBookingFlightModel = mongoose.model('PreBookingFlightModel', PreBookingFlightSchima)

module.exports = PreBookingFlightModel