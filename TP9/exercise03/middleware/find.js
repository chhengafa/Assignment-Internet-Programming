const find = (message) => {
    return (req, res, next) => {
        const token = req.cookies;
        // console.log(token.access_token);
        if (token.access_token) {
            return res.status(400).json({ "success": "false", "message": "You can not " + message + " again" })
        }
        next();
    }
}

module.exports = {
    find,
}