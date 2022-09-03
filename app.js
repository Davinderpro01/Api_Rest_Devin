require('dotenv').config()

const express = require('express')

const cors = require('cors')

const dbConnect = require('./config/mongo')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT||8081

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log('La app está corriendo en el puerto 8081')
})

dbConnect()