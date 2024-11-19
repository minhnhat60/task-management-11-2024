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

    res.json(tasks);
});

app.get("/tasks/detail/:id", async (req, res) => {
    const id = req.params.id

    const task = await Task.findOne({
        _id: id,
        deleted: false
    })

    res.json(task);
});

app.listen(port, () => {
    console.log("Server running with port " + port);
})