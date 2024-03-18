const express = require("express");
const userRoutes =require("../api/users");
const app = express();
const router = require("../api/users/router");
const userDetailrouter = require("../api/userDetails/router");
const productRouter = require("../api/products/router");
const categoryRouter = require("../api/store_categories/router")
const { jwtAuthMiddleWare, generateToken } = require("../helper/jwt");

const initialize = (app) =>{
    app.use("/api/users", router);
    //auth routes no jwt
    app.use("/api/users", userDetailrouter);
    app.use("/api/users", productRouter);
    app.use("/api/users", categoryRouter);
}
module.exports={
    initialize,
}