const express = require('express')
const Router = express.Router()
const User = require('../models/users')

// ----------------- NOTES ----------------- //
Router.route('/')
    .get(async (req, res) => {
        const notes = await User.find({ _id: req.user._id }, '-_id notes')
        
        return res.status(200).send(notes)
    })
    .post(async (req, res) => {

        try {

            // query the owner
            const user = await User.findById(req.user._id).exec()
            
            // insert a new note
            user.notes.push(req.body)
            const userFound = await user.save()

            return res.status(200).send(userFound.notes)

        } catch(e) {

            return res.status(400).send(e)

        }
    })

Router.route('/:id')
    .put(async (req, res) => {
        
        try {

            // query notes owner
            const user = await User.findById(req.user._id).exec()
            console.log(user)
            
            // search for the note to be updated
            let note = user.notes.find((note) => note._id.toString() === req.params.id)
            console.log('note:' + note)
            
            if (!note) return res.status(400).send({ message: 'Note not found' })

            // update the corresponding note
            note.body = req.body.body || note.body
            note.title = req.body.title || note.title
            const noteUpdated = await user.save()

            res.status(200).end()

        } catch (e) {

            res.status(400).send(e)
            
        }
        
    })

    .delete(async (req, res) => {

        try {

            // query notes owner
            const user = await User.findById(req.user._id).exec()

            // search for the note to be deleted
            let noteIndex = user.notes.findIndex((note) => note._id.toString() === req.params.id)
            if (noteIndex === -1) return res.status(400).send({ message: 'Note not found' })

            // delete
            const deleted = user.notes.splice(noteIndex, 1)
            const noteDeleted = await user.save()

            return res.status(200).end()

        } catch (e) {

            res.status(400).send(e)

        }
    })

module.exports = Router