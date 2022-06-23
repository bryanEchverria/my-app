import React,{ useState, FC}  from 'react';
import { Nav, Navbar, Container, NavLink  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


type props = {
    handleShow : ()=> void; 
}

const TopBar : FC<props> = ({handleShow})=>{

    return(
        <>
        <Navbar bg="success" variant="light" > 
            <Container fluid>
             {/* ARREGLAR URGENTE! */}
            <FontAwesomeIcon type="button"  onClick={handleShow} className="highlight "  icon={faBars} />
            <br />
                <Navbar.Brand className="ml-4" >Mi negocio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav.Link href='/#'> Inicio</Nav.Link>
                    <NavLink>Contacto</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>  
    );
};


export default TopBar;