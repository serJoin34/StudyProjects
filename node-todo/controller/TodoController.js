const DB = require('../models/Todo')

exports.getTodos = (req, res) => {
    let content = DB.getAll()
    res.status(200).send(content)
}

exports.setTodo = (req, res) => {
    let content = DB.setTodo(req.body.title, req.body.content)
    res.status(200).send(content)
}