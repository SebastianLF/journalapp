import React from 'react'
import Page from './Page.js'
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Container>
      <Page />
    </Container>
    <footer style={{ backgroundColor: '#', padding: '20px', margin: '80px 0 0 0', textAlign: 'center' }}>
      <p style={{ margin: 0 }}>Done as part of the Chingu pre-cohort tier 3 project. i.e <a target='_blank' href="https://chingu.io/ ">Chingu</a></p>
    </footer>
    </>
  )
}

export default App
