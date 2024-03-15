const { getCategoryByIdServices, createCategoryServices,updateCategoryServices,deleteCategoryByIdServices} = require("../../models/services/store_categories_services");

// getProduct=async(req,res)=>{

// }

getCategoryById = async (req, res) => {
    const category = await getCategoryByIdServices(req.params.id);
    res.status(200).send(category)
}

addCategory = async (req, res) => {
    const category = await createCategoryServices(req.params.id, req.body);
    res.status(200).send(category)
}


updateCategory = async (req, res) => {

    const result = await updateCategoryServices(req.params.id, req.body);
    res.status(200).send(result)
}

deleteCategory = async (req, res) => {
    const result = await deleteCategoryByIdServices(req.params.id)
    res.status(200).send(result)
}

module.exports = {
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory,
}

