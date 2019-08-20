import React from 'react'
import Note from './Note'
import { Row, CardDeck } from 'react-bootstrap'

function Cards({ setNotes, notes }) {
   return (
      <CardDeck>
         {notes.map((note, i) => (
               <Note setNotes={setNotes} key={note._id} id={note._id} title={note.title} body={note.body} />
         ))}
      </CardDeck>
   )
}

export default Cards