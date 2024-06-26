const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
// const DB = require("../../models/index");
// const users = db.users;
const { generateToken } = require("../../helper/jwt");
const { empty } = require("@hapi/joi/lib/base");




exports.signUp = async (data = {}) => {
	try {
        const email =await DB.users.findOne({
			where:{email:data.email}
		})
		if(email){
			return {
				success: false,
				
				messages: "user with this email already exists",
				// status: HTTP_STATUS.OK,
			};
		}
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
		
		users.dataValues.token = token;
		delete users.dataValues.password;
		if (users) {
			return {
				success: true,
				data: users,
				messages: "Signed-up successfully",
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
			where: {
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

exports.updateUser = async (data = {}, params) => {
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

exports.signIn = async (email = null, password = "", requestData) => {
	try {
		let result = await DB.users.findOne({ where: { email: email } });
		if (result) {

			let chkPass = await bcrypt.compare(password, result["password"]);
			if (!chkPass) {
				return {
					success: false,
					data: {},
					messages: "EMAIL_PASSWORD_INCORRECT",
					// status: HTTP_STATUS.OK,
				};
			}
			let token = generateToken({
				id: result.id,
				email: result.email,

			});

			result = result.dataValues;

			delete result.password;

			return {
				success: true,
				data: { token: token, userDetails: result },
				messages: "LOGIN_SUCCESS",
				// status: HTTP_STATUS.OK,
			};
		}
		return {
			success: false,
			data: {},
			messages: "USER_DOESNOT_EXISTS",
			// status: HTTP_STATUS.UNAUTHORIZED,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: {},
			messages: "LOGIN_FAILED",
			// status: HTTP_STATUS.UNAUTHORIZED,
		};
	}
};