const { getProductByIdServices, createProductServices, updateProductServices, deleteProductByIdServices } = require("../../models/services/product_services");

// getProduct=async(req,res)=>{

// }

getProductById = async (req, res) => {
    const product = await getProductByIdServices(req.params.id);
    res.status(200).send(product)
}

addProduct = async (req, res) => {
    const product = await createProductServices(req.params.id, req.body);
    res.status(200).send(product)
}


updateProduct = async (req, res) => {

    const result = await updateProductServices(req.params.id, req.body);
    res.status(200).send(product)
}

deleteProduct = async (req, res) => {
    const result = await deleteProductByIdServices(req.params.id)
    res.status(200).send(result)
}

module.exports = {
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
}

