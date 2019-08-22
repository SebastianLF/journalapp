import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'
import { API_HOST } from '../utils/env'

function SignForm({ setIsAuth, url = '/signin', title = 'Signin', buttonLabel = 'Sign in' }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!password || !name) {
      setError('Username or password invalid.')
      return
    }

    axios.post(`${API_HOST}${url}`, { name, password })
      .then(({ data }) => {
        localStorage.setItem('token', data)
        setIsAuth(true)
      })
      .catch(function (e) {
        setError(e.message)
      })
  }

  return (
    <div>
      <h1>{title}</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            value={name}
            type="name"
            placeholder=""
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        {error ? <Alert variant='danger'>{error}</Alert> : ''}
        <Form.Group>
          { title === 'Signin' ? 
            <Form.Text>try username: guest, password: guest </Form.Text>
            : ''
          }
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          {buttonLabel}
      </Button>
      </Form>
    </div>
  )
}

export default SignForm