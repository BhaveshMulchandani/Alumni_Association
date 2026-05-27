const express = require("express");

const router = express.Router();

const {
   createevent,
   getevents
} = require("../controllers/event.controller");

const authmiddleware = require("../middlewares/user.middleware");

router.post(
   "/create",
   authmiddleware.isloggedin,
   createevent
);

router.get(
   "/all",
   getevents
);

module.exports = router;