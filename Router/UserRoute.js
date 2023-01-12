const { AirportDetails, GetFlightDetails, GetWeeklyFlightDetails, PreBookingFlight } = require('../Controller/UserController')

const router = require('express').Router()

router.route('/').get(AirportDetails)

router.route('/flightdetails').post(GetFlightDetails)

router.route('/weekflightdetails').get(GetWeeklyFlightDetails)

router.route('/preflightbooking').post(PreBookingFlight)

module.exports = router