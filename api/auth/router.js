const router = require("express").Router();
const Controller = require("./controller");
const { userValidation, signUpValidation } = require("./validation");


router.post("/sign-in", userValidation, Controller.signIn);
router.post("/sign-up", signUpValidation, Controller.signUp);

module.exports = router;
