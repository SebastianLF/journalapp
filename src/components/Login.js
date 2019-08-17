import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import LoginForm from './LoginForm.js'
import { Container, Row } from "react-bootstrap";


function Login() {
  const [count, setCount] = useState(0)

  

  return (
    <Container>
      <Row>
        <LoginForm></LoginForm>
      </Row>
    </Container>
  )
}

export default Login