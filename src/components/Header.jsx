import React, { useState } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';


function Header() {

    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Navbar expand="lg" id='barreDeNav' className={nav ? 'nav active' : 'nav'}>
            <Container className='p-2 '>
                <Navbar.Brand href="#home" className='fs-3 text-white fw-bold'>sunnyside</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5 ">
                        <Nav.Link href="#home" className='px-3 text-white' >About</Nav.Link>
                        <Nav.Link href="#link" className='px-3 text-white' >Services</Nav.Link>
                        <Nav.Link href="#link" className='px-3 text-white' >Projects</Nav.Link>
                        <Nav.Link href="#link" >
                            <Button variant="light rounded-pill">CONTACT</Button>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
