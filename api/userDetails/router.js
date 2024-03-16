const router = require("express").Router();
const userDetailController = require("./controller");
const Validation=require("./validation");
const { jwtAuthMiddleWare}=require("../../helper/jwt")

router.get("/userDetail/:id", jwtAuthMiddleWare,userDetailController.getUserDetailById);
router.post("/addUserDetail/:id",Validation.userDetailValidation,userDetailController.addUserDetail);
router.put("/updateUserDetail/:id",userDetailController.updateUserDetail);
router.delete("/deleteUserDetail/:id",userDetailController.deleteUserDetail);
module.exports = router;