const {
  getAllTodos,
  createTodo,
} = require("../../../../controllers/todoController");

async function todoRouter(fastify, options) {
  fastify.get("/", getAllTodos);
  fastify.post("/", createTodo);
}

module.exports = todoRouter;
