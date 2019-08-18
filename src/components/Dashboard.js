import React, { useState, useEffect } from 'react'
import { Alert, Form, Button, Row, Container } from 'react-bootstrap'
import axios from 'axios'
import { API_HOST } from '../utils/env'
import { getToken } from '../utils/localStorage'
import Note from './Note'

function Dashboard() {

  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({ title: '', body: '' })
  const headersConfig = {
    headers: { 'Authorization': "Bearer " + getToken() }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_HOST}/api/notes`, {
        headers: { 'Authorization': "Bearer " + getToken() }
      })

      setNotes(result.data)
    }

    fetchData()
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${API_HOST}/api/notes`, note, headersConfig)
      .then(({ data }) => setNotes(data))
      .catch(e => console.error(e))
  }

  return (
    <div>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={e => setNote({ ...note, title: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="formBasicBody">
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={e => setNote({ ...note, body: e.target.value })} />
          </Form.Group>
          <Alert variant='danger'>
            errors
          </Alert>

          <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </Row>
      <Row>
        {notes.map((note) => <Note key={note._id} title={note.title} body={note.body} />)}
      </Row>
    </div>
  )
}


export default Dashboard