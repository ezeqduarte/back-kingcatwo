const passport = require("passport");
const passportJwt = require("passport-jwt"); ///Se genera para desencriptar el token, el bcrypt encripta

const { KEY_JWT } = process.env;
const User = require("../models/User");

passport.use(
  new passportJwt.Strategy( //definimos la estrategia de extraccion de jwt
    {
      jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(), // de tipo bearer
      secretOrKey: KEY_JWT, //con la clave secreta
    }, //la estrategia devuelve la extraccion en un objeto: jwt_payload
    async (jwt_payload, done) => {
      /* console.log(jwt_payload); */
      try {
        let user = await User.findOne({ _id: jwt_payload.id }); //buscamos el usuario
        if (user) {
          user = {
            //este es el objeto user que se "inyecta" al req
            //aqui es donde protejo los datos del usuario
            name: user.name,
            email: user.email,
            photo: user.photo,
            role: user.role,
            id: user._id,
          };
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        console.log(error);
        return done(error, false);
      }
    }
  )
);

module.exports = passport;
