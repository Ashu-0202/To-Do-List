// Required modules ...
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import router from './route'

// Using modules ...

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('', router)

export default app