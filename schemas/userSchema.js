const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(50).messages({
    "any.required": "Name is required",
    "string.empty": "Name is empty",
    "string.min": "Name is too short",
    "string.max": "Name is too long",
  }),
  lastName: joi.string().required().min(3).max(50).messages({
    "any.required": "Last name is required",
    "string.empty": "Last name is empty",
    "string.min": "Last name is too short",
    "string.max": "Last name is too long",
  }),
  age: joi.number().required().min(15).messages({
    "any.required": "Age is required",
    "number.base": "Age is required",
    "number.min": "You have to be over 15 years old",
  }),
  email: joi.string().required().email({ minDomainSegments: 2 }).messages({
    "any.required": "Email is required",
    "string.empty": "Email is empty",
    "string.email": "Invalid email",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "Photo is required",
    "string.empty": "Photo is empty",
    "string.uri": "Invalid URL",
  }),
  password: joi.string().required().messages({
    "any.required": "Password is required",
    "string.empty": "Password is empty",
  }),
  role: joi.string().valid("user", "admin"),
});

module.exports = schema;
