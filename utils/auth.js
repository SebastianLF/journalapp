const jwt = require('jsonwebtoken')
const User = require('../models/users.js')

const createToken = user => {
    return token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '2h'})
}

exports.verifyToken = (req, res, next) => {

    // Get JWT token from authorization header, expect 'Bearer ey2r...'
    const token = req.headers.authorization && req.headers.authorization.toString().trim().split(' ')[1]

    // Check if token exist in header
    if(!token) return res.status(401).send({ message: 'Invalid' })

    // Verify if token is valid
    try {
        const user = jwt.verify(token, process.env.SECRET_KEY)
        req.user = user
        next()
    } catch(e) {
        res.status(401).send({ message: 'Token not valid' })
    }
}

exports.signup = async (req, res) => {

    if(!req.body.password || !req.body.name) {
        return res.status(400).send({ message: 'Need username and password' })
    }

    // sanitize inputs
    const newUser = { 
        name: req.body.name.toString().trim(), 
        password: req.body.password.toString().trim() 
    }

    try {
        const user = await User.create(newUser)
        const token = createToken(user.toJSON())
        res.status(201).send(token)
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.signin = async (req, res) => {

    if(!req.body.password || !req.body.name) {
        return res.status(400).send({ message: 'Need username and password' })
    }

    // Sanitize inputs
    const user = { 
        name: req.body.name.toString().trim(), 
        password: req.body.password.toString().trim() 
    }

    try {

        // Checking if user is already in the database
        const userFound = await User.findOne(user)
        .select('-_id -__v')
        .exec()

        if(!userFound) return res.status(400).send({ message: 'Wrong username or password' })

        const token = createToken(userFound.toJSON())

        res.send(token)

    } catch (e) {
        res.status(400).send(e)
    }
}