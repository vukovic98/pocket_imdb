import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Link to={"home"} className="nav-brand">
                    <Navbar.Brand>Home</Navbar.Brand>
                </Link>
                <Nav className="mr-auto text-right">
                    <Link to={"profile"} className="nav-link">Profile</Link>
                </Nav>
            </Navbar>
        </div>
    );
}