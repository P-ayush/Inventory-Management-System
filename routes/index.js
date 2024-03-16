const express = require("express");
const userRoutes =require("../api/users");
const app = express();
const router = require("../api/users/router");
const userDetailrouter = require("../api/userDetails/router");
const { jwtAuthMiddleWare, generateToken } = require("../helper/jwt");

const initialize = (app) =>{
    app.use("/api/users", router);
    //auth routes no jwt
    app.use("/api/users", userDetailrouter);
    
}
module.exports={
    initialize,
}