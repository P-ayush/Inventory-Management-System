const {createUserDetailServices,updateUserDetailServices,deleteUserDetailByIdServices,getAllUserDetailServices}=require("../../models/services/userDetails_services")
getUserDetailById = async (req, res) => {
    const userDetail = await getAllUserDetailServices(req.params.id);
    res.status(200).send(userDetail)
}

addUserDetail = async (req, res) => {
    const userDetail = await createUserDetailServices(req.params.id, req.body);
    res.status(200).send(userDetail)
}


updateUserDetail= async (req, res) => {

    const result = await updateUserDetailServices(req.params.id, req.body);
    res.status(200).send(result)
}

deleteUserDetail = async (req, res) => {
    const result = await deleteUserDetailByIdServices(req.params.id)
    res.status(200).send(result)
}

module.exports = {
    getUserDetailById,
    addUserDetail,
    updateUserDetail,
    deleteUserDetail,
}
