const dummyTodo = require('../helpers/MockData')

const DeleteTodoById = (req, res, next) => {
	const result = dummyTodo.filter(
		(item) => item.todo_id !== req.swagger.params.id.value
	) // use a databse for deleting and adding
	const length = dummyTodo.length
	res.header('Content-type', 'application/json')
	if (result.length < length) {
		res.status(200)
		res.end(JSON.stringify({ message: 'Deletion successful' }))
	} else {
		res.status(400)
		res.end(JSON.stringify({ message: 'deletion unsuccessfull' }))
	}
}

module.exports = {
	DeleteTodoById: DeleteTodoById,
}
