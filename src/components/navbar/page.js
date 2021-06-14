import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import './style.css';

export default function Page(props) {
    return (
        <Navbar variant="dark">
            <Navbar.Brand>QS1 Application</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/search">Search</Nav.Link>
            </Nav>  
            <Navbar.Text>
                <IconContext.Provider value={{ color: "#FFF", className: "user-icon", size:"2em" }}>
                    <FaUserCircle />
                </IconContext.Provider>
                Signed in as: <a href='/#' className="user-name">Steve Oldakowski</a>
            </Navbar.Text>
        </Navbar>
    );
}
