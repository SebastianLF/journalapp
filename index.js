const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const notesRoute = require('./routes/notes')
const usersRoute = require('./routes/users')
const { verifyToken, signup, signin } = require('./utils/auth')

// Handles env variables
dotenv.config()

// Connect to MONGODB
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, () => {
    console.log('Connected to db!');
})

// to avoid getting error 
// (node:4378) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

// Parse JSON body
app.use(express.json())

// Routes
app.post('/signup', signup)
app.post('/signin', signin)

app.use('/api', verifyToken)
app.use('/api/users', usersRoute)
app.use('/api/notes', notesRoute)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`App is listening on port: ${process.env.SERVER_PORT}!`);
})