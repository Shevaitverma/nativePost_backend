const Joi = require('@hapi/joi');

// ---- regesteration validation ----
const regesterValidation = data =>{
    const schema = Joi.object({
        name:Joi.string().min(5).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    return schema.validation(data);
}

module.exports.regesterValidation = regesterValidation;