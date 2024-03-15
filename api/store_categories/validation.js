const Joi = require("@hapi/joi");

const categoryValidation = async (req,res,next)=>{
    const authSchema = Joi.object({
    shop_name: Joi.string().required(),
    created_by: Joi.string().required(),
    
    // updated_by:Joi.string().required(),
});
const result = await authSchema.validateAsync(req.body);
    if (result.error) {
        console.log(result.error.details);
    } else {
        next();
    }
};

const categoryUpdateValidation = async (req,res,next)=>{
    const authSchema = Joi.object({
    shop_name: Joi.string().required(),
    // created_by: Joi.string().required(),
    
    updated_by:Joi.string().required(),
});
const result = await authSchema.validateAsync(req.body);
    if (result.error) {
        console.log(result.error.details);
    } else {
        next();
    }
};

module.exports = {
    categoryValidation,
    categoryUpdateValidation,
};