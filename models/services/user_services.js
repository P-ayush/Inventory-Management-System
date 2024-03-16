const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
// const DB = require("../../models/index");
// const users = db.users;
const { generateToken } = require("../../helper/jwt");

exports.createUser = async (data = {}) => {
    try {

        const password = data.password;
        const hash = await bcrypt.hash(password, 10);
        const info = {
            name: data.name,
            email: data.email,
            password: hash
        }
        const users = await DB.users.create(info);
        const payload = {
            id: users.id,
            email: users.email
        }
        const token = generateToken(payload);
        console.log("token is :", token);
		users.dataValues.token = token;
		delete users.dataValues.password;
        if (users) {
            return {
                success: true,
                data: users,
                messages: "user created successfully",
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



exports.getUser = async (id) => {

	const users = await DB.users.findOne(
		{
		where :{
			id: id,
		}
	}
	);
	delete users.dataValues.password;
	if (users) {
		return {
			success: true,
			data: users,
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

exports.updateUser= async (data = {},params) => {
    const id = params;
	const users = await DB.users.findOne({
		where: {
			id: id,
		},
	});
	if (users) {
		await DB.users.update(data, {
			where: {
				id: id,
			},
		});
		delete users.dataValues.password;
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
