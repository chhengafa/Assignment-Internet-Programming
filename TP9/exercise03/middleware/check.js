const jwt = require('jsonwebtoken')

const check = (message) => {
    return (req, res, next) => {
        const token = req.cookies;
        // console.log(token.access_token);
        if (token.access_token) {
            try {
                jwt.verify(token.access_token, "moewmoew");
                // console.log("Decoded", decoded.email);
            } catch (error) {
                return res.status(500).json({ "sucess": false, "message": error })
            }
        } else {
            return res.status(400).json({ "sucess": false, "message": "Attemp to " + message + " failed" })
        }
        next();
    }
}

module.exports = {
    check,
}