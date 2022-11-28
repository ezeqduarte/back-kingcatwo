const joi = require("joi");

const schema = joi.object({
  name: joi.string().pattern(/[a-z]/).required().min(3).max(45).messages({
    "any.required": "Name is required",
    "string.base": "Name is empty",
    "string.min": "Name is too short",
    "string.max": "Name is too long",
    "string.pattern.base": "Name is not a number",
  }),
  continent: joi.string().pattern(/[a-z]/).required().min(4).max(10).messages({
    "any.required": "Continent is required",
    "string.base": "Continent is empty",
    "string.min": "Continent is too short",
    "string.max": "Continent is too long",
    "string.pattern.base": "Continent is not a number",
  }),
  photo: joi.string().required().messages({
    "any.required": "Photo is required",
    "string.base": "photo is empty",

  }),
  population: joi.number().required().messages({
    "any.required": "Population is required",
    "number.base": "Population must be a number",
  }),
  userId: joi.string().required().messages({
    "any.required": "UserId is required",
    "string.base": "UserId is empty",

  }),
});

module.exports = schema;
