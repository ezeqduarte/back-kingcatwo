const {mustSignInResponse} = require('../config/responses')

function mustSignIn(req, res, next) {
    if(req.user) {
        return next();                                                ///Este nos sirve para loguear a la cuenta 
    }

    return mustSignInResponse()
}

module.exports = mustSignIn