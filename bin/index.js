const express = require("express");

const bodyParser = require("body-parser");
const db = require("../models/index");
const dbSync = require("../models/dataBaseSync")

const Sequelize = require("sequelize");
const routes = require("../routes");
global.DB = db;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.initialize(app);

dbSync(db.sequelize)
.then(()=>{
app.listen(8000, () => {
    console.log('server has started on port 8000');})

})
.catch(err=>{
    console.error('Failed to sync database:', err);
});