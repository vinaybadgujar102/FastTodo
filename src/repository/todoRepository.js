const fp = require("fastify-plugin");

class TodoRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    return this.db.todos;
  }

  async create(todoText) {
    const todoList = this.db.todos;
    this.db.todos.push = {
      text: todoText,
      id: todoList.length,
    };
    return this.db.todos;
  }

  async getOne(id) {
    return this.db.todos[id];
  }

  async deleteOne(id) {
    this.db.todos.splice(id, 1);
  }

  async deleteAll() {
    this.db.todos = [];
  }
}

async function todoRepository(fastify, options) {
  const { db } = fastify;
  const repo = new TodoRepository(db);

  fastify.decorate("todoRepository", repo);
}

module.exports = fp(todoRepository);
