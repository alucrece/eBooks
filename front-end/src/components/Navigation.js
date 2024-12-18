import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import "./Navigation.css";
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/login");
    }
    return (
        
        <Navbar bg="light" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <h2>CHAT ME App</h2>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!user && (
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
                        <LinkContainer to="/chat">
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>
                        {user && (
                            <button className="logBtn" onClick={handleLogout}>Logout</button>
                            /*<button className="sendBtn" onClick={handleLogout}>Logout</button>*/
                        )}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    
    );
}

export default Navigation;
