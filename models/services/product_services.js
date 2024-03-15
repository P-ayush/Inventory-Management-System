const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
// const DB = require("../../models/index");
// const users = db.users;
const { generateToken } = require("../../helper/jwt");

exports.getProductByIdServices=async(data)=>{
 const product =await DB.products.findById(data);
 if (product) {
    return {
        success: true,
        data: product,
        messages: "product found successfully",
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

exports.createProductServices=async(productId,data)=>{
    // const product =await DB.products.create(data);
    // return product;

    try {
        const product = await DB.products.create(productId,data);
        
        const payload = {
            id: productId.id,
            email: data.email
        }
        const token = generateToken(payload);
        console.log("token is :", token);
        if (product) {
            return {
                success: true,
                data: product,
                messages: "product created successfully",
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
exports.updateProductServices=async(productId,data)=>{
    const id = productId;
	const product = await DB.users.findOne({
		where: {
			id: id,
		},
	});
	if (product) {
		await DB.users.update(data, {
			where: {
				id: id,
			},
		});
		return {
			success: true,
			data: product,
			messages: "user detail updated",
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

exports.deleteProductByIdServices=async(id)=>{
	const result =await Product.deleteOne({id});
	if (result) {
        return {
            success: true,
            data: result,
            messages: "product deleted successfully",
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