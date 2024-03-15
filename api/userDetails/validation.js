const Joi = require("@hapi/joi");

const userDetailValidation = async (req,res,next)=>{
    const authSchema = Joi.object({
    address: Joi.string().required(),
    profession: Joi.string().required(),
    salary:Joi.number().required(),
    
    // updated_by:Joi.string().required(),
});
const result = await authSchema.validateAsync(req.body);
    if (result.error) {
        console.log(result.error.details);
    } else {
        next();
    }
};

// const userDetailUpdateValidation = async (req,res,next)=>{
//     const authSchema = Joi.object({
//         address: Joi.string().required(),
//     // created_by: Joi.string().required(),
    
//     updated_by:Joi.string().required(),
// });
// const result = await authSchema.validateAsync(req.body);
//     if (result.error) {
//         console.log(result.error.details);
//     } else {
//         next();
//     }
// };

module.exports = {
    userDetailValidation,
    // categoryUpdateValidation,
};