const controller = require('../controller/TodoController')

module.exports = function (app){
    app.use(function (req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })

    /**
     * @swagger
     * /api/todos:
     *  get:
     *    description: Use to request all todos
     *    responses:
     *      '200':
     *        description: A successful response
     */

    app.get(
        "/api/todos",
        controller.getTodos
    )


    /**
     * @swagger
     *
     * /api/todo:
     *   post:
     *     description: Creates a task
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: task
     *         description: Task object
     *         in:  body
     *         required: true
     *         type: object

     *     responses:
     *       200:
     *         description: A successful response
     */

    app.post(
        "/api/todo",
        controller.setTodo
    )
}