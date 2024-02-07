const migrationRun = require('./src/database/mysql/migrations')
const express = require('express');
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())

app.use(routes);

migrationRun();

const port = 3333;

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});