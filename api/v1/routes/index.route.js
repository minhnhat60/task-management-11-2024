const taskRoutes = require("./task.route");
const fashionRoutes = require("./fashion.route");

module.exports = (app) => {
    const version = "/api/v1"
    app.use(version+"/tasks", taskRoutes);

    app.use(version+"/fashion", fashionRoutes);

}