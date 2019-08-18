import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Page from './Page.js'
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Row>
        <Col>
          <Page />
        </Col>
      </Row>
    </Container>
  )
}

export default App
