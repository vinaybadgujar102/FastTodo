const fp = require("fastify-plugin");

class TodoRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {}

  async create(todoText) {
    const todoList = this.db.todos;
    this.db.todos.push = {
      text: todoText,
      id: todoList.length,
    };
    return this.db.todos;
  }

  async getOne(id) {}

  async deleteOne(id) {}

  async deleteAll() {}
}

async function todoRepository(fastify, options) {
  const { db } = fastify;
  const repo = new TodoRepository(db);

  fastify.decorate("todoRepository", repo);
}

module.exports = fp(todoRepository);
