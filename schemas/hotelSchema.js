const joi = require ("joi")
const schema = joi.object({

    name: joi
    .string()
    .pattern(/[a-z]/)
    .required()
    .min(3)
    .max(45)
    .messages({
"string.pattern.base": "Use only valid characters",
"any.required": "Name is required",
"string.empty": "Name is required",
"string.base": "Please enter a valid name",
"string.min": "Name is too short",
"string.max": "Name is too long",
    }),
    photo: joi.array()
    .items(joi.string())
    .required()
    .messages({
        "any.required": "Please complete the field is require",
        "string.base": "Please enter a valid URL photo",
       
            }), //Uri se asegura de que el string si o si sea HTTP 
    
    capacity: joi.number()
    .required()
    .min(50)
    .messages({
        "any.required": "Hotel capacity is required",
        "number.min": "Capacity is too low",
        "number.base": "Complete the field only with numbers"
            })
    
    ,
    description:joi.string().required().min(20).max(350).pattern(/[a-z]/)
    .messages({
        "string.pattern.base": "Only letters alowhed",
        "any.required": "The hotel must have a description",
        "string.base": "Please enter a valid description",
        "string.max": "The hotel description is too short",
        "string.max": "The hotel description is too long",
        
            })    
    
    ,
    userId: joi.string().required(),
    cityId: joi.string().required(),




})

module.exports = schema





