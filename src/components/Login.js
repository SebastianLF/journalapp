import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Signup from './Signup.js'
import { Container, Row } from "react-bootstrap";


function Login() {
  const [count, setCount] = useState(0)

  return (
    <Container>
        <Signup />
    </Container>
  )
}

export default Login