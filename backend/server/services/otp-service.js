const crypto = require("crypto")

class OtpService {
    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999)
        return otp
    }

    verifyOtp() { }

    sendBySms() { }

    sendByMail() { }


}

module.exports = new OtpService()
