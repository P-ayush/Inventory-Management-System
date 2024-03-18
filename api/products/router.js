const router = require("express").Router();
const productController = require("./controller");
const Validation = require("./validation");
const { jwtAuthMiddleWare}=require("../../helper/jwt")

router.get("/product/:id",jwtAuthMiddleWare ,productController.getProductById);
router.post("/addProduct",Validation.productValidation, productController.addProduct);
router.put("/updateProduct/:id",Validation.productUpdateValidation, productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);
module.exports = router;