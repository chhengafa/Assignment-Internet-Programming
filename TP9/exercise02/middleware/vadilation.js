const Validation = (schema) => {
    return async(req, res, next) => {
        try {
            await schema.validateAsync(req.query)
        } catch (error) {
            return res.json({ "success": "false", "message": error })
        }
        next();

    }
}


module.exports = {
    Validation,
}