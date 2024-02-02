const {Router} = require('express');
const tasksRouter = require('./tasks.routes');
const usersRouter = require('./users.routes');

const routes = Router();

routes.use('/tasks', tasksRouter)
routes.use('/users', usersRouter)

module.exports = routes;