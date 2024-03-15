const router = require("express").Router();
const userDetailController = require("./controller");
const Validation=require("./validation");
router.get("/userDetail/:id", userDetailController.getUserDetailById);
router.post("/addUserDetail",Validation.userDetailValidation,userDetailController.addUserDetail);
router.put("/updateUserDetail/:id",userDetailController.updateUserDetail);
router.delete("/deleteUserDetail/:id",userDetailController.deleteUserDetail);
module.exports = router;