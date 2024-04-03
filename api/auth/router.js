const router = require("express").Router();
const Controller = require("./controller");
const { userValidation } = require("./validation");


router.post("/sign-in", userValidation, Controller.signIn);

module.exports = router;
