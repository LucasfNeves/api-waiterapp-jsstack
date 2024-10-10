import express from 'express'
import mongoose from 'mongoose'

import { router } from './router'

mongoose
    .connect('mongodb://localhost:27017')
    .then(() => {
        const app = express()

        app.use(router)

        app.listen(3001, () => {
            console.log('Server running on port 3001')
        })
    })
    .catch((error) => {
        console.log('Error connecting to database', error)
    })
