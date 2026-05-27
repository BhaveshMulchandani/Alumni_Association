const express = require("express");
const router = express.Router();
const admincontroller = require("../controllers/admin.controller");

router.get("/pending-users", admincontroller.getPendingUsers);

router.put("/approve/:id", admincontroller.approveUser);

router.put("/reject/:id", admincontroller.rejectUser);

module.exports = router;