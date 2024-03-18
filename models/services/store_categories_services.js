const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
// const DB = require("../../models/index");
// const users = db.users;
const { generateToken } = require("../../helper/jwt");

exports.getCategoryByIdServices=async(id)=>{
 const category =await DB.store_categories.findAll({where:{id:id}});
 if (category) {
    return {
        success: true,
        data: category,
        messages: "category found successfully",
        // status: HTTP_STATUS.OK,
    };
} else {
    return {
        success: false,
        data: {},
        messages: "SOMETHING_WENT_WRONG",
        // status: HTTP_STATUS.BAD_REQUEST,
    };
}
}

exports.createCategoryServices=async(categoryId,data)=>{
    // const product =await DB.products.create(data);
    // return product;

    try {
        const category = await DB.store_categories.create(data);
        
        const payload = {
            id: categoryId,
            shop_name: data.shop_name,
        }
        const token = generateToken(payload);
        console.log("token is :", token);
        if (category) {
            return {
                success: true,
                data: category,
                messages: "category created successfully",
                // status: HTTP_STATUS.OK,
            };
        } else {
            return {
                success: false,
                data: {},
                messages: "SOMETHING_WENT_WRONG",
                // status: HTTP_STATUS.BAD_REQUEST,
            };
        }
    } catch (e) {
        console.log(e);
       
    }

}
exports.updateCategoryServices=async(categoryId,data)=>{
    const id = categoryId;
	const category = await DB.store_categories.findOne({
		where: {
			id: id,
		},
	});
	if (category) {
		await DB.store_categories.update(data, {
			where: {
				id: id,
			},
		});
		return {
			success: true,
			data: category,
			messages: "category detail updated",
			// status: HTTP_STATUS.OK,
		};
	} else {
		return {
			success: false,
			data: {},
			messages: "SOMETHING_WENT_WRONG",
			// status: HTTP_STATUS.BAD_REQUEST,
		};
	}
}

exports.deleteCategoryByIdServices=async(id)=>{
	const result =await DB.store_categories.destroy({where:{id:id}});
	if (result) {
        return {
            success: true,
            data: result,
            messages: "category deleted successfully",
            // status: HTTP_STATUS.OK,
        };
    } else {
        return {
            success: false,
            data: {},
            messages: "SOMETHING_WENT_WRONG",
            // status: HTTP_STATUS.BAD_REQUEST,
        };
    }
}
// bu