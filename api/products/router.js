const router = require("express").Router();
const productController = require("./controller");
const Validation = require("./validation");
router.get("/product/:id", productController.getProductById);
router.post("/addProduct",Validation.productValidation, productController.addProduct);
router.put("/updateProduct/:id",Validation.productUpdateValidation, productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);
module.exports = router;