const joi = require("joi"); 

const schema = joi.object({
  cityId: joi.string().required().messages({
    "any.required": "City is required",
    "string.empty": "City is empty",
  }),
  name: joi.string().required().messages({
    "any.required": "Name is required",
    "string.empty": "Name is empty",
  }),
  photo: joi
    .array()
    .required()
    .items(
      joi.string().uri().required(),
      joi.string().uri().required(),
      joi.string().uri().required()
    )
    .messages({
      "any.required": "Photo is required",
      "array.empty": "Photo is empty",
      "array.includes": "Insert a valid URL",
      "array.includesRequiredUnknowns": "Is required three valids URLs"
    }),

  description: joi.string().required().min(20).max(150).messages({
    "any.required": "Description is required",
    "string.empty": "Description is empty",
    "string.min": "Description is too short max 150 characters",
    "string.max": "Description is too long, min 20 characters",
  }),
  duration: joi.number().required().messages({
    "any.required": "Duration is required",
    "number.base": "Insert duration in number",
  }),
  price: joi.number().required().messages({
    "any.required": "Price is required",
    "number.base": "Insert price in number",
  }),
  userId: joi.string().required().messages({
    "any.required": "userId is required",
    "string.empty": "userId is empty",
  }),
});

module.exports = schema;
