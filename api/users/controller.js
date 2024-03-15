const db = require("../../models/index");
const users = db.users;
// const userDetails = db.userDetails;
const user_service=require("../../models/services/user_services")

// const getOneUser = async (req, res) => {
//     const id = req.params.id;
//     const user = await User.findOne({ where: { id: id } });
//     res.status(200).send(user)
// };

const getUser = async (req, res) => {
    const id = req.params.id;

		if (!id) {
			id = req.users.id;
		}
    const users = await user_service.getUser(id)
   return  res.status(200).send(users)

};
const createUser = async (req, res) => {
const user =req.body
let data = await user_service.createUser(user);
if (data) {
    return res.send({
        success: true,
        data: data.data,
        messages: data.messages,
        // status: HTTP_STATUS.OK,
    });
} else {
    return {
        success: false,
        data: {},
        messages: data.messages,
        // status: HTTP_STATUS.BAD_REQUEST,
    };
}
};
const updateUser = async (req, res) => {
   
    const user = await user_service.updateUser(req.body,req.params.id);
    res.status(200).send(user)

};
// const deleteUser = async (req, res) => {
//     const id = req.params.id;
//     const user = await User.destroy({ where: { id: id } });
//     res.status(200).send("user deleted");
// };
module.exports={
    getUser,
    createUser,
    updateUser,

}