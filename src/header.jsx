import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Profile from "./components/profile";
import Writepost from './components/writepost';

export default class Header extends Component {
    render() {
        const headerStyles = `
            .custom-navbar {
                --bs-navbar-color: rgba(255,255,255,0.75);
                --bs-navbar-hover-color: rgba(255,255,255,0.9);
                --bs-navbar-disabled-color: rgba(255,255,255,0.25);
                --bs-navbar-active-color: #fff;
                --bs-navbar-brand-color: #fff;
                --bs-navbar-brand-hover-color: #fff;
                background: linear-gradient(145deg, #2c3e50 0%, #1a252f 100%);
                box-shadow: 0 2px 15px rgba(0,0,0,0.2);
            }
            
              .navbar-nav {
        --bs-nav-link-color: var(--custom-nav-color, #dee2e6) !important;
        --bs-nav-link-hover-color: var(--custom-nav-hover, #ff6b00) !important; // Changed to orange
    }

    .nav-link {
        transition: all 0.3s ease;
        border-bottom: 2px solid transparent;
        position: relative;
        padding-bottom: 4px;

        &:hover:not(.active-orange) {
            color: #ff6b00 !important;
            border-bottom-color: rgba(255,107,0,0.3) !important;
        }
    }

    .nav-link.active-orange {
        color: #ff6b00 !important;
        border-bottom-color: #ff6b00 !important;
        font-weight: 600;
        --custom-nav-color: #ff6b00 !important;
        --custom-nav-hover: #ff6b00 !important;
    }
`;
        return (
            <Router>
                <style>{headerStyles}</style>
                <div>
                    <Navbar
                        expand="lg"
                        className="custom-navbar"
                        variant="dark"
                        data-bs-theme="dark"
                    >
                        <Container fluid>
                            <Navbar.Brand
                                as={NavLink}
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `d-flex align-items-center ${isActive ? 'text-warning' : 'text-light'}`
                                }
                            >
                                <img
                                    src="/logo.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block me-3 rounded-circle"
                                    alt="App Logo"
                                />
                                <span className="fs-4 fw-bold">Easy Learning</span>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="main-nav" />
                            <Navbar.Collapse id="main-nav">
                                <Nav className="me-auto">
                                    <Nav.Link
                                        as={NavLink}
                                        to="/about"
                                        end
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'active-orange' : ''}`
                                        }
                                    >
                                        About Us
                                    </Nav.Link>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/contact"
                                        end
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'active-orange' : ''}`
                                        }
                                    >
                                        Contact Us
                                    </Nav.Link>
                                </Nav>

                                <Nav>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/blog"
                                        end
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'active-orange' : ''}`
                                        }
                                    >
                                        Blog
                                    </Nav.Link>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/profile"
                                        end
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'active-orange' : ''}`
                                        }
                                    >
                                        Profile
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/writepost" element={<Writepost />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/" element={<App />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
//