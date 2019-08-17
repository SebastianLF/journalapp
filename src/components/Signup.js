import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../utils/env'
import Dashboard from './Dashboard'

function Signup() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {

  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!password || !name) {
      setError('Username or password invalid.')
      return
    }

    axios.post(`${API_URL}/signup`, { name, password })
      .then(({ data }) => {
        localStorage.setItem('token', data)
        setIsAuth(true)
      })
      .catch(function (e) {
        setError(JSON.stringify(e))
      })
  }

  if (isAuth) return <Dashboard />

  return (
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
          placeholder=""
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      { error ? <Alert variant='danger'>{error}</Alert> : '' }
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  )
}

export default Signup