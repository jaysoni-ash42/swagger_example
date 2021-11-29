const dummyTodo = require('../helpers/MockData')

const GetAllTodos = (req, res, next) => {
	res.header('Content-type', 'application/json')
	if (dummyTodo) {
		res.end(JSON.stringify(dummyTodo))
	} else {
		res.status(400)
		res.end(JSON.stringify({ message: 'No Data Found' }))
	}
}

module.exports = {
	GetAllTodos: GetAllTodos,
}
