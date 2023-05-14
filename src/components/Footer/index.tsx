import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { RoutesNames } from "../.."

const Footer = () => {
  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Container>
        <Nav className="me-auto">
          {Object.keys(RoutesNames).map((link) => (
            //@ts-ignore
            <Nav.Link href={RoutesNames[link]}>{link}</Nav.Link>
          ))}
        </Nav>
        <Navbar.Text>© {new Date().getFullYear()} Python Tutorials</Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer
