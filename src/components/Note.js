import React, { useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import { API_HOST } from '../utils/env'
import { getToken } from '../utils/localStorage'

function Note({ setNotes, id, title, body }) {

  const [showModal, setShowModal] = useState(false)
  const [inputModal, setInputModal] = useState(body)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const deleteNote = async (e) => {
    e.preventDefault()

    // delete note
    try {
      const notesUpdated = await axios.delete(`${API_HOST}/api/notes/${id}`, {
        headers: { 'Authorization': "Bearer " + getToken() }
      })

      notesUpdated.data && setNotes(notesUpdated.data)

    } catch (e) {

      alert(e)
    }
  }

  const editNote = async (e) => {

    const notesUpdated = await axios.put(`${API_HOST}/api/notes/${id}`, { title, body: inputModal }, {
      headers: { 'Authorization': "Bearer " + getToken() }
    })

    if (notesUpdated && notesUpdated.data) {
      setNotes(notesUpdated.data)
      setShowModal(false)
    }
  }

  return (
    <>
      <Card style={{ width: '18rem', minWidth: '18rem', marginTop: '30px', minHeight: '240px', flex: '0 1 auto' }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#" onClick={handleShowModal}>Edit</Card.Link>
          <Card.Link href="#" onClick={deleteNote}>Delete</Card.Link>
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body as='textarea' value={inputModal} onChange={(e) => setInputModal(e.target.value)}>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
        </Button>
          <Button variant="primary" onClick={editNote}>
            Save Changes
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Note