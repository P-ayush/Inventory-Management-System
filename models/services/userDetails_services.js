const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
// const DB = require("../../models/index");
// const users = db.users;
const { generateToken } = require("../../helper/jwt");

exports.createUserDetailServices = async (data = {}) => {
    try {

        // const password = data.password;
        // const hash = await bcrypt.hash(password, 10);
        // const info = {
        //     name: data.name,
        //     email: data.email,
        //     password: hash
        // }
        const userDetail = await DB.userDetails.create(data);
        const payload = {
            id: userDetail.id,
            userID: userDetail.userID,
        }
        const token = generateToken(payload);
        console.log("token is :", token);
        if (userDetail) {
            return {
                success: true,
                data: userDetail,
                messages: "user detail created successfully",
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

};



exports.getAllUserDetailServices= async (userDetail) => {
    const id = userDetail.id;
	const userDetails = await DB.userDetails.findAll({
		where :{
			id: id,
		}
	});
	if (users) {
		return {
			success: true,
			data: userDetails,
			messages: "",
			// status: HTTP_STATUS.OK,
		};
	} else {
		return {
			success: true,
			data: [],
			messages: "",
			// status: HTTP_STATUS.OK,
		};
	}
};

exports.updateUserDetailServices= async (data = {},params) => {
    const id = params;
	const userDetails = await DB.userDetails.findOne({
		where: {
			id: id,
		},
	});
	if (userDetails) {
		await DB.userDetails.update(data, {
			where: {
				id: id,
			},
		});
		return {
			success: true,
			data: data,
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
};

exports.deleteUserDetailByIdServices=async(id)=>{
	const result =await Product.deleteOne({id});
	if (result) {
        return {
            success: true,
            data: result,
            messages: "user detail deleted successfully",
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