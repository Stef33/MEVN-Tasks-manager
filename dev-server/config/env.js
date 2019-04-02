import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app)
    } else {
        setProdEnv(app)
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development'
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db'
    process.env.TOKEN_SECRET = 'Ethan10012016'
    app.use(bodyParser.json())
    app.use(morgan('dev'))
    app.use(cors())
}

function setProdEnv(app) {
    process.env.NODE_ENV = 'production'
    process.env.DB_URL = 'mongodb://localhost:27017/prod-db'
    process.env.TOKEN_SECRET = 'Ethan10012016'
    app.use(bodyParser.json())
    app.use(express.static(__dirname + '../dist'))
}