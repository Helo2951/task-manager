const {Router} = require('express')
const TasksController = require('../controllers/TasksController')

const tasksRouter = Router()

const tasksController = new TasksController()

tasksRouter.post('/:user_id', tasksController.createTask);
tasksRouter.delete('/:id', tasksController.deleteTask);
tasksRouter.put('/:id', tasksController.updateTask);
tasksRouter.put('/statusTask/:id', tasksController.statusTask);

tasksRouter.get('/', tasksController.listTasks);

module.exports = tasksRouter