import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap' ;


export const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Social Media App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                        </Nav>

                        {/* too add links to the right side of the nav */}
                        <Nav>
                            <Nav.Link href="#action1">Sign Up</Nav.Link>
                            <Nav.Link href="#action2">Login In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
