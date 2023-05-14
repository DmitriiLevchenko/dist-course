import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { RoutesNames } from "../.."

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Python Tutorials</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Articles" id="basic-nav-dropdown">
              {Object.keys(RoutesNames).map((link) => (
                //@ts-ignore
                <NavDropdown.Item href={RoutesNames[link]}>
                  {link}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
