const validator = (schema) => [
  //Se utiliza [] en el validator porque es una función dentro de una función. (justo en el caso de este middleware)
  (req, res, next) => {
    const data = schema.validate(req.body, { abortEarly: false });
    if (data.error) {
      return res.json({
        success: false,
        message: data.error.details,

      });
    }
    next()
  },
];


module.exports = validator