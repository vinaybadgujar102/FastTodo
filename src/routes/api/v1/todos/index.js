const { getAllTodos } = require("../../../../controllers/todoController");

async function todoRouter(fastify, options) {
  fastify.get("/", getAllTodos);
}

module.exports = todoRouter;
