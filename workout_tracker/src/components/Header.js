import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Context as AuthContext} from '../context/AuthContext';

function NavigationBar() {
    const {state, tryLocalSignin, signOut} = useContext(AuthContext);

    useEffect(()=> {
        tryLocalSignin();
    }, [])

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Workout Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    { state.token ? (
                        <>
                            <Nav className="me-auto">
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/create">Add Workout</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
                            </Nav>
                        </>
                    ) : (
                        <Nav className="ms-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;