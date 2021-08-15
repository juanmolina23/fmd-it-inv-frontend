import React from "react"
import { Link, useHistory } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

function NavBar() {
  const history = useHistory()
  const routeLink = eventKey => {
    history.push(eventKey)
  }
  return (
    <Navbar bg='light' expand='lg' sticky='top' collapseOnSelect>
      <Row className='ps-2'>
        <Col>
          <Nav className='me-auto'>
            <Navbar.Brand>Facilities IT Inventory</Navbar.Brand>
          </Nav>
        </Col>
      </Row>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Container className='justify-content-end'>
        <Row>
          <Col>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link
                  className='nav-link'
                  eventKey='/dashboard'
                  onSelect={routeLink}
                >
                  Dashboard
                </Nav.Link>
                <Nav.Link eventKey='/devices/add' onSelect={routeLink}>
                  Add Device
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavBar
