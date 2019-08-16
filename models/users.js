const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required : true
    },
    password: {
        type: 'String',
        required: true
    },
    notes: [
        {
            title: {
                type: 'String',
                require: true,
                trim: true,
                maxLength: 20
            },
            body: {
                type:'String',
                required: true,
                trim: true,
                maxLength: 1000
            }
        }
    ]
})

module.exports = mongoose.model('User', userSchema)