const Joi = require("@hapi/joi");

const userValidation = async (req,res,next)=>{
    const authSchema = Joi.object({
    email: Joi.string().email().required(),
   password: Joi.string().min(6).required(),
    
    // updated_by:Joi.string().required(),
});
const result = await authSchema.validateAsync(req.body);
    if (result.error) {
        console.log(result.error.details);
    } else {
        next();
    }
};

module.exports = {
    userValidation
};