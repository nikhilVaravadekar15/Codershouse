const otpService = require("../services/otp-service")
const hashService = require("../services/hash-service")

class AuthController {
    async sendOtp(req, res) {

        const { phone } = req.body
        if (!phone) {
            res.status(400).send({ message: "Phone field is required" })
        }

        const otp = await otpService.generateOtp()

        const ttl = process.env.OTP_TIME_TO_LIVE;
        const expires = Date.now() + ttl
        const data = `${phone}.${otp}.${expires}`
        const hash = await hashService.hashOtp(data)

        res.json({ "hash": hash })
    }
}


module.exports = new AuthController();
