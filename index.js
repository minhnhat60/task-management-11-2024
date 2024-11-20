const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");

dotenv.config();

const routerApiVer1 = require("./api/v1/routes/index.route");

database.connect();

const port = process.env.PORT;

// Api Router
routerApiVer1(app);
// End Router



app.listen(port, () => {
    console.log("Server running with port " + port);
})