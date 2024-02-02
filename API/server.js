const migrationRun = require('./src/database/mysql/migrations')
const express = require('express');
const routes = require('./src/routes')

const app = express()
app.use(express.json());

app.use(routes);

migrationRun();

const port = 3333;

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});