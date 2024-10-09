async function getAllTodos(req, res) {
  const { todoService } = this;

  return await todoService.getAll();
}

async function createTodo(req, res) {
  const { todoService } = this;

  return await todoService.create(req.body.todoText);
}

module.exports = { getAllTodos };
