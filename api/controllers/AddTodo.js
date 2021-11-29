const dummyTodo = require('../helpers/MockData')

const AddTodo = (req, res, next) => {
	const todo = req.swagger.params.todo.value
	const length = dummyTodo.length
	res.header('Content-type', 'application/json')
	if (todo) {
		dummyTodo.push(todo) //use a database for the storing and fetching the items
		if (dummyTodo.length > length) {
			res.end(JSON.stringify(todo))
		} else {
			res.status(400)
			res.end(JSON.stringify({ message: 'Something went wrong' }))
		}
	} else {
		res.status(400)
		res.end(JSON.stringify({ message: 'No todo body exist' }))
	}
}

module.exports = {
	AddTodo: AddTodo,
}
