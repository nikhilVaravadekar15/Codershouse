const express = require("express")
const authController = require("../controller/auth-controller")

const router = express.Router()

router.post("/api/send-otp", authController.sendOtp)

module.exports = router
