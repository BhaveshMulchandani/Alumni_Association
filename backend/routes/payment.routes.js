const express = require('express');
const router = express.Router();
const paymentcontroller = require('../service/payment.service')
const authmiddleware = require('../middlewares/user.middleware')

router.post('/createorder',authmiddleware.isloggedin,authmiddleware.isalumni,paymentcontroller.createorder)
router.post('/verify',authmiddleware.isloggedin,authmiddleware.isalumni,paymentcontroller.verifyPayment)

module.exports = router;