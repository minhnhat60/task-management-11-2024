const paginationHelper = require("../../../helpers/pagination.helper");
const Task = require("../models/task.model");

// [GET] /api/v1/tasks/
module.exports.index = async (req, res) => {
    const find = {
        deleted: false
    }

    // Filter status
    if(req.query.status) {
        find.status = req.query.status
    }
    // End Filter status

    // Sort
    const sort = {}
    if(req.query.sortKey && req.query.sortValue) {
        sort[req.query.sortKey] = req.query.sortValue;
    }
    // End Sort

    // Pagination
    const countTasks = await Task.countDocuments(find);
    const objectPagination = paginationHelper(2, req.query, countTasks);

    console.log(objectPagination);
    // End Pagination

    const tasks = await Task.find(find).sort(sort).limit(objectPagination.limitItem).skip(objectPagination.skip);

    // res.json({
    //     total: countTasks,
    //     data: tasks
    // })

    res.json(tasks);
}


// [GET] /api/v1/tasks/detail/:id
module.exports.detail = async (req, res) => {
    const id = req.params.id

    const task = await Task.findOne({
        _id: id,
        deleted: false
    })

    res.json(task);
}