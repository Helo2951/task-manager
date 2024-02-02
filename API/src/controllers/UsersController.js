const knex = require('../database/knex')
const bcrypt = require('bcryptjs')

class UsersController {
    async createUsers(req, res) {
        const {name, email, password} = req.body

        const hashedPassword = await bcrypt.hash(password, 8)
        await knex('users').insert({
            name,
            email, 
            password: hashedPassword
        })
        return res.status(201).json('Usuário criado com sucesso')
    }
    async deleteUser(req, res) {
        const {id} = req.params

        await knex('users').where({id}).delete()

        res.status(200).json('Usuário deletado com sucesso')
    }
    async updateUser(req, res) {
        const {name, email} = req.body
        const {id} = req.params

        const [user] = await knex('users').where({id})

        await knex('users').where({id}).update({name, email}),[user.name, user.email]

        res.status(200).json('Dados atualizados com sucesso')
    }
}

module.exports = UsersController