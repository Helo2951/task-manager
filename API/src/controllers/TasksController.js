const knex = require('../database/knex')

class TasksController{
    async createTask(req, res){
        const {title, content, deadline} = req.body
        const {user_id} = req.params

        const status = false

        await knex('tasks').insert({
            title,
            content,
            deadline,
            status,
            user_id
        })
        return res.status(201).json('Tarefa criada com sucesso')
    }
    async listTasks(req, res) {
        const tasks = await knex('tasks')
        return res.status(200).json(tasks)
    }
    async deleteTask(req, res) {
        const {id} = req.params

        await knex('tasks').where({id}).delete()

        res.status(200).json('Tarefa deletada com sucesso!')
    }
    async updateTask(req, res) {
        const {title, content, deadline} = req.body
        const {id} = req.params

        const [task] = await knex('tasks').where({id})

        await knex('tasks').where({id}).update({title, content, deadline}), [task.title, task.content, task.deadline]

        res.status(200).json('Tarefa atualizada com sucesso')
    }
    async statusTask(req, res) {
     const {id} = req.params;

     const [task] = await knex('tasks').where({id});

     console.log(task)

     const statusTask = task.status

    const updatedStatus = !statusTask
    await knex('tasks').where({id}).update(status, updatedStatus)

     res.status(200).json(updatedStatus)
        
    }
}

module.exports = TasksController