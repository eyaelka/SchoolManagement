const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

notifController = require("../controllers/notifController");


router.post("", notifController.postNotif)

module.exports = router;