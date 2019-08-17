import React from 'react'
import { Navbar } from 'react-bootstrap'
import Notes from './Notes'

function Dashboard() {

  return (
    <div>
      <Navbar>
        <Navbar.Brand>Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:
        </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Notes />
      <Notes />
      <Notes />
    </div>
  )
}


export default Dashboard