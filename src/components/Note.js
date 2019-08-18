import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Note({ title, body }) {
  return (
    <Card className="text-center">
      <Card.Header>{ title }</Card.Header>
      <Card.Body>
        <Card.Text>
          { body }
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Note