const express = require('express');
const { SignUpUser, LoginUser, Validator } = require('../Controller/Common');

const router = express.Router();

router.route('/validator').get(Validator)

router.route('/').post(SignUpUser)

router.route('/signin').post(LoginUser)

module.exports = router