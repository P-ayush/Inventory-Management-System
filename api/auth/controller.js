const UserService = require("../../models/services/user_services");

exports.signIn = async (request, response) => {
    try {
        global.COUNTRY_SHORT_NAME = "";
        let data = await UserService.signIn(
            request.body.email,
            request.body.password,
            request.body
        
        );
        if (data.success) {
            return response.send({ success:true, data:data.data, message:data.messages, status:data.status});
        }
        return response.send({success: false, data:{}, message:data.messages, status:data.status});
    } catch (errors) {
       console.log(errors);
        return response.send(
            {
                success: false,
                data: {},
                message: "INTERNAL_SERVER_ERROR"}
            // HTTP_STATUS.INTERNAL_SERVER_ERROR
        );
    }
};