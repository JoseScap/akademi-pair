//* imports:
const validations = require('../helpers/validations');

const verifyReqBody = (req, res, next) => {
    validation(req.body);
    next();
};

module.exports = {
    verifyReqBody,
};
