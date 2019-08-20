import React, { useState, useEffect } from 'react'
import { Col, Alert, Form, Button, Row } from 'react-bootstrap'
import axios from 'axios'
import { API_HOST } from '../utils/env'
import { getToken } from '../utils/localStorage'
import Cards from './Cards'


function Dashboard() {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const headersConfig = {
    headers: { 'Authorization': "Bearer " + getToken() }
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${API_HOST}/api/notes`, {
        headers: { 'Authorization': "Bearer " + getToken() }
      })

      data[0] && setNotes(data[0].notes)
    }

    fetchData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${API_HOST}/api/notes`, { title, body }, headersConfig)
      .then(({ data }) => {
        setNotes(data)
        setTitle('')
        setBody(' ')
      })
      .catch(e => setError(e.message))
  }

  return (
    <>
      <Row>
        <Col>
          <h2>Add a note:</h2>
          <Form onSubmit={handleSubmit} style={{ margin: '30px 0 0 0' }}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={e => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicBody">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={e => setBody(e.target.value)} />
            </Form.Group>
            {error ?
              <Alert variant='danger'> {error} </Alert>
              : ''
            }
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <h2 style={{ margin: '60px 0 0 0' }}>Notes:</h2>
      <Row >
        <Col>
          <Cards setNotes={setNotes} notes={notes} />
        </Col>
      </Row>
    </>
  )
}


export default Dashboard