const express = require("express");
const authConroller = require("../controllers/authConroller");

const router = express.Router();


router.post("/register", authConroller.register);

router.post("/login", authConroller.login );

module.exports = router;
