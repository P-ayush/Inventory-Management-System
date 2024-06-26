const Joi = require("@hapi/joi");

const userValidation = async (req, res, next) => {
    const authSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),

        // updated_by:Joi.string().required(),
    });
    let data = authSchema.validate(req.body);
	if (data.hasOwnProperty("error")) {
		res.json({ success:false, error:data.error,message: "FIELD_ERROR"});
	} else {
		next();
	}
    // const result = await authSchema.validateAsync(req.body);
    // if (result.error) {
    //     console.log(result.error.details);
    // } else {
    //     next();
    // }
};
const signUpValidation = async (req, res, next) => {
    const authSchema = Joi.object({
        name: Joi.string().required(),
        password: Joi.string().min(6).required(),
        // phone_number:Joi.required(),
        email: Joi.string()
    });
    let data = authSchema.validate(req.body);
	if (data.hasOwnProperty("error")) {
		res.json({ success:false, error:data.error,message: "FIELD_ERROR"});
	} else {
		next();
	}
    // const result = await authSchema.validateAsync(req.body);
    // if (result.error) {
    //     console.log(result.error.details);
    // } else {
    //     next();
    // }
};

module.exports = {
    userValidation,
    signUpValidation
};