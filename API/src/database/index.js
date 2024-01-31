const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_manager'
})

async function connection() {
    await pool.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('MySql connected ...')
    })
    pool.destroy() //??
}

module.exports = {connection, pool}