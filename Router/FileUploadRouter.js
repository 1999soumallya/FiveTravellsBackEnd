const { FileUpload, AirportDataUpload, PhotoUpload } = require('../Controller/FileUpload');
// const path = require('path')
// const multer = require('multer');
const { validateToken } = require('../Middleware/tokenValidation');

//multer
// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../public/'))
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// let upload = multer({ storage: storage })

const router = require('express').Router();

router.route('/').post(validateToken, FileUpload)

router.route('/airportfileupload').post(validateToken, AirportDataUpload)

router.route('/flightimage').post(validateToken, PhotoUpload)

module.exports = router