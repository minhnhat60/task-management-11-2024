const taskRoutes = require("./task.route");
const fashionRoutes = require("./fashion.route");
const userRoutes = require("./user.route");

const authMiddleware = require("../middlewares/auth.middleware")

module.exports = (app) => {
    const version = "/api/v1"
    app.use(version+"/tasks",authMiddleware.requireAuthen, taskRoutes);

    app.use(version+"/fashion", fashionRoutes);

    app.use(version+"/users", userRoutes)

};