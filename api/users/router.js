const userController = require("./controller");
const { jwtAuthMiddleWare}=require("../../helper/jwt")
const router = require("express").Router();
// const { jwtAuthMiddleWare } = require("../../helper/jwt");
// const { userValidation }= require("./validation");
const validation=require("./validation")
router.get("/user/:id",jwtAuthMiddleWare, userController.getUser);
// router.get("/:id", userController.getOneUser);
router.post("/createUser",validation.userValidation, userController.createUser);
router.put("/updateUser/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);

module.exports = router;