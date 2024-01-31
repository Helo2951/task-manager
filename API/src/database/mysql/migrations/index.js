const { pool } = require('../..')
const createUsers = require('./createUsers')

async function migrationRun() {
    const schemas = [createUsers].join('')
    const tableName = `users`
    const verifyIfTableExists = `SHOW TABLES LIKE '${tableName}'`

    pool.execute(verifyIfTableExists, (err, results) => {
        if(err) {
            console.error('Erro ao verificar a existência da tabela', err)
            pool.end()
            return;
        }
        if(results.length === 0) {
            pool.execute(schemas, (err) => {
                if(err) {
                    console.error('Erro ao criar a tabela', err)
                }else {
                    console.log('Tabela criada com sucesso')
                }
                pool.end()
            })
        }
    })
}

module.exports = migrationRun