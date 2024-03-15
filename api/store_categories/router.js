const router = require("express").Router();
const categoryController = require("./controller");
const Validation=require("./validation");
router.get("/category/:id", categoryController.getCategoryById);
router.post("/addCategory",Validation.categoryValidation,categoryController.addCategory);
router.put("/updateCategory/:id",Validation.categoryUpdateValidation,categoryController.updateCategory);
router.delete("/deleteCategory/:id",categoryController.deleteCategory);
module.exports = router;