const joi = require("joi");

const schema = joi.object({
  itineraryId: joi.string().messages({
    "string.base": `event ID must be a type of 'text'`,
    "any.required": "The event ID field is required",
    "string.empty": "The event ID field is empty",
  }),
  showId: joi.string().messages({
    "string.base": `event ID must be a type of 'text'`,
    "any.required": "The event ID field is required",
    "string.empty": "The event ID field is empty",
  }),
  name: joi.string().required().messages({
    "any.required": "Reaction is required",
    "string.empty": "Name of reaction is empty",
  }),
  icon: joi.string().uri().required().messages({
    "any.required": "Reaction is required",
    "string.empty": "Icon is empty",
    "string.uri": "Please insert a valid URL"
  }),
  iconBack: joi.string().uri().required().messages({
    "any.required": "Reaction is required",
    "string.empty": "Icon is empty",
    "string.uri": "Please insert a valid URL"
  }),
  userId: joi.any(),
});

module.exports = schema;
