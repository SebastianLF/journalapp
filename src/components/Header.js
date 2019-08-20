import React from 'react'
import { Navbar, Nav, Link } from 'react-bootstrap'

function Header({ isAuth, setForm }) {
  const Signup = { title: 'Signup', url: '/signup', buttonLabel: 'Sign up' }
  const Signin = { title: 'Signin', url: '/signin', buttonLabel: 'Sign in' }
  let NavState = (
    <Nav>
      <Nav.Link href="#" onSelect={e => setForm(Signin)}>Sign in</Nav.Link>
      <Nav.Link href="#" onSelect={e => setForm(Signup)}>Sign up</Nav.Link>
    </Nav>
  )

  if(isAuth) {
    NavState = (<Navbar.Text> Signed in! Welcome!</Navbar.Text>)
  }

  return (
    <Navbar style={{ margin: '0 0 40px 0' }}>
      <Navbar.Brand>Journal APP</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        { NavState }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header