import express from 'express'
import mongoose from 'mongoose'
import path from 'node:path'

import { router } from './router'

mongoose
    .connect('mongodb://localhost:27017')
    .then(() => {
        const app = express()

        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', '*')
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

            next()
        })

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

        app.use(express.json())

        app.use(router)

        app.listen(3001, () => {
            console.log('Server running on port 3001')
        })
    })
    .catch((error) => {
        console.log('Error connecting to database', error)
    })
