const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
var bodyParser = require('body-parser');

dotenv.config();

const routerApiVer1 = require("./api/v1/routes/index.route");

database.connect();

const port = process.env.PORT;

// parse application/json
app.use(bodyParser.json())

// Api Router
routerApiVer1(app);
// End Router

app.listen(port, () => {
    console.log("Server running with port " + port);
})