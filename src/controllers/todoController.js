async function getAllTodos(req, res) {
  const { todoService } = this;

  const response = await todoService.getAll();

  return res.status(200).send({ response });
}

async function createTodo(req, res) {
  const { todoService } = this;

  const response = await todoService.create(req.body.todoText);
  return res.status(201).send({ response });
}

async function deleteAllTodos(req, res) {
  const { todoService } = this;

  const response = await todoService.deleteAll();
  return res.status(200).send({ response });
}

async function deleteTodo(req, res) {
  const { todoService } = this;

  const response = await todoService.deleteOne(req.params.id);
  return res.status(200).send({ response });
}

async function getTodo(req, res) {
  const { todoService } = this;

  const response = await todoService.getOne(req.params.id);
  return res.status(200).send({ response });
}

module.exports = {
  getAllTodos,
  createTodo,
  deleteAllTodos,
  deleteTodo,
  getTodo,
};
