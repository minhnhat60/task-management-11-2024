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

    // Search
    if(req.query.keyword) {
        const regex = new RegExp(req.query.keyword, "i");
        find.title = regex
    }
    // End Search

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

// [PATCH] /api/v1/tasks/change-status/:id
module.exports.changeStatus = async (req, res) => {
    try {
        const id = req.params.id
        const status = req.body.status
    
        await Task.updateOne({
            _id : id,
        },{
            status: status
        })
    
        res.json({
            code: 200,
            message: "Cập nhật trạng thái thành công!"
        })
    } catch (error) {
        console.log(error);
        res.json({
            code: 400,
            message: "Cập nhật trạng thái thất bại!"
        })
        res.redirect("/tasks");
    }
}