const dummyTodo = require('../helpers/MockData')

const GetTodoById = (req, res, next) => {
	const result = dummyTodo.filter(
		(item) => item.todo_id === req.swagger.params.id.value
	)
	res.header('Content-type', 'application/json')
	if (result.length > 0) {
		res.end(JSON.stringify(result[0]))
	} else {
		res.status(400)
		res.end(JSON.stringify({ message: 'No Todo exist' }))
	}
}

module.exports = {
	GetTodoById: GetTodoById,
}
