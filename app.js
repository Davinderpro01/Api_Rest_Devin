require('dotenv').config()

const express = require('express')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const openApiConfiguration = require('./docs/swagger')
const dbConnectNoSql = require('./config/mongo')
const {dbConnectMysql} = require('./config/mysql')
const app = express()
const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const port = process.env.PORT||8081

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfiguration))

app.use('/api', require('./routes'))

if(NODE_ENV !== 'test'){
    app.listen(port);
}


(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMysql();

module.exports = app;