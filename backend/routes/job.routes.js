const express = require('express')
const { isloggedin,isalumni, isstudent } = require("../middlewares/user.middleware")
const jobcontroller = require("../controllers/job.controller")
const router = express.Router()

router.post("/createjob",isloggedin,jobcontroller.createjob)
router.get("/showjob",jobcontroller.showjob)


module.exports = router