const express = require('express');
const router = express.Router();
const donationcontroller = require('../controllers/donation.controller')
const authmiddleware = require('../middlewares/user.middleware')

router.post('/createdonation', authmiddleware.isloggedin, authmiddleware.isalumni, donationcontroller.createdonation)
router.get('/getalldonations', authmiddleware.isloggedin, donationcontroller.getalldonations)
router.get('/getdonation/:id', authmiddleware.isloggedin, authmiddleware.isalumni, donationcontroller.getdonationbyid)
router.get('/mydonations', authmiddleware.isloggedin, authmiddleware.isalumni, donationcontroller.getmydonations)

module.exports = router;