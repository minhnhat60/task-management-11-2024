const taskRoutes = require("./task.route");
const fashionRoutes = require("./fashion.route");
const userRoutes = require("./user.route");

module.exports = (app) => {
    const version = "/api/v1"
    app.use(version+"/tasks", taskRoutes);

    app.use(version+"/fashion", fashionRoutes);

    app.use(version+"/users", userRoutes)

};