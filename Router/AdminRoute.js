const { GetAllFlightData, AirportDetails, PreFlightDetails } = require('../Controller/AdminController');
const { validateToken } = require('../Middleware/tokenValidation')
const router = require('express').Router();

router.route('/').get(validateToken, GetAllFlightData)

router.route('/airportdetails').get(validateToken, AirportDetails)

router.route('/preflightbooking').get(validateToken, PreFlightDetails)

module.exports = router