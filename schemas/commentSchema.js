const joi = require("joi");

const schema = joi.object({
  showId: joi.any(),
  userId: joi.any(),
  date: joi.date().required(),
  comment: joi.string().required().min(10).messages({
    "any.required": "Comment is required",
    "string.empty": "Comment is empty",
    "string.min": "The comment is too short",
  }),
});

module.exports = schema;

