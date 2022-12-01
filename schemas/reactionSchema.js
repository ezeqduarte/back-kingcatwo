const joi = require("joi");

const schema = joi.object({
  itineraryId: joi.required().messages({
    "any.required": "Itinerary is required",
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
