const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
var bodyParser = require('body-parser');
const cors = require("cors");

dotenv.config();

const routerApiVer1 = require("./api/v1/routes/index.route");

database.connect();

const port = process.env.PORT;

// -------------------------
// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));
// -------------------------

app.use(cors());

// parse application/json
app.use(bodyParser.json())

// Api Router
routerApiVer1(app);
// End Router

app.listen(port, () => {
    console.log("Server running with port " + port);
})