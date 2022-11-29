const joi = require("joi");

const schema = joi.object({
  email: joi.string().required().email({ minDomainSegments: 2 }).messages({
    "any.required": "Email is required",
    "string.empty": "Email is empty",
    "string.email": "Invalid email",
  }),

  password: joi.string().required().messages({
    "any.required": "Password is required",
    "string.empty": "Password is empty",
  }),

});

module.exports = schema;
