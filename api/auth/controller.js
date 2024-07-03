const { request, response } = require("express");
const UserService = require("../../models/services/user_services");
const winston = require("../../routes/logger");

exports.signIn = async (request, response) => {
    try {

        let data = await UserService.signIn(
            request.body.email,
            request.body.password,
            request.body

        );
        if (data.success) {

            return response.send({ success: true, data: data.data, message: data.messages, status: data.status });
        }
        return response.send({ success: false, data: {}, message: data.messages, status: data.status });
    } catch (errors) {
        winston.error(`Error Message --SignIn--: ${errors}`);
        console.log(errors);
        return response.send(
            {
                success: false,
                data: {},
                message: "INTERNAL_SERVER_ERROR"
            }
            // HTTP_STATUS.INTERNAL_SERVER_ERROR
        );
    }
};

exports.signUp = async (req, res) => {

    const user = req.body
    let data = await UserService.signUp(user);
    if (data) {
        return res.send({
            success: true,
            data: data.data,
            messages: data.messages,
             status: 200,
        });
    } else {
        return {
            success: false,
            data: {},
            messages: data.messages,
            // status: HTTP_STATUS.BAD_REQUEST,
        };
    }

}