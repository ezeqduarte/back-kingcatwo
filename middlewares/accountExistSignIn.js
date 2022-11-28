const User= require("../models/User");
const { invalidCredentialsResponse } = require("../config/responses") //Corrobora que la cuenta exista y que el email coincida con el de la base de datos

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = { //inyecto al req la propiedad user con los datos que necesito
            id: user._id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            password: user.password,
            verified: user.verified,
            role: user.role,
        }
        //console.log(req.user)
        return next()
    }
    return invalidCredentialsResponse(req,res)  //Es la repsuesta que indica que el usuario no existe
}

module.exports = accountExistsSignIn