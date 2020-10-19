let todo = [
   {
        'id': '1',
        'title': 'Task 1',
        'content': 'Some Record 1'
   },
   {
        'id': '2',
        'title': 'Task 2',
        'content': 'Some Record 2'
   },
]

const getAll = () => {
    console.log(todo)
    return todo.map(todo => todo)
}

const setTodo = (title, content) => {
    let id = String(todo.length + 1)
    todo.push(
        {
            'id': id,
            'title': title,
            'content': content
        }
    )
    console.log(todo)
}

const modelMethod = {
    getAll,
    setTodo
}
module.exports = modelMethod