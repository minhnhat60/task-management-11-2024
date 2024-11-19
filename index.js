const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");

const Task = require("./models/task.model");

dotenv.config();

database.connect();

const port = process.env.PORT;

app.get("/tasks", async (req, res) => {
    const tasks = await Task.find({
        deleted: false
    })

    console.log(tasks);

    res.json(tasks);
});

app.listen(port, () => {
    console.log("Server running with port " + port);
})