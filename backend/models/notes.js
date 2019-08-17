const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: 'String',
        required: true,
        unique: true,
        min: 3,
        max: 36
    },
    body: {
        type: 'String',
        required: true,
        max: 255
    }
})

module.exports = mongoose.model('Note', noteSchema)