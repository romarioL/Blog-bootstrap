import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'



class CustomNavbar extends Component {
    render() {
    	return (
    		<Navbar bg="primary" expand="lg">
    			<Navbar.Brand href="/">Meu Blog</Navbar.Brand>
    			<Navbar.Toggle aria-controls="basic-navbar-nav" />
    			<Navbar.Collapse  id="basic-navbar-nav">
    			  <Nav className="mr-auto">
    			     <Nav.Link href="/">Home</Nav.Link>
    			     <Nav.Link href="/About">Sobre</Nav.Link>
    			     <Nav.Link href="/News">Notícias</Nav.Link>
    			  </Nav>
    			</Navbar.Collapse>
    		</Navbar>
    		)
    }
}

export default CustomNavbar