import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
   const [user] = useAuthState(auth);
   const handleSignOut = () => {
      signOut(auth);
   };
   return (
      <>
         <Navbar
            collapseOnSelect
            expand="lg"
            sticky="top"
            className="bg-primary"
            data-bs-theme="dark"
         >
            <Container>
               <Navbar.Brand as={Link} to="/">
                  <img height={40} src={logo} alt="" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="home#services">Services</Nav.Link>
                     <Nav.Link href="home#experts">Experts</Nav.Link>
                     <NavDropdown
                        title="Dropdown"
                        id="collapsible-nav-dropdown"
                     >
                        <NavDropdown.Item href="#action/3.1">
                           Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                           Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                           Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           Separated link
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <Nav>
                     <Nav.Link as={Link} to="/about">
                        About
                     </Nav.Link>
                     {
                        user && <>
                          <Nav.Link as={Link} to="/addservice">Add</Nav.Link>
                          <Nav.Link as={Link} to="/manageservices"> Manage </Nav.Link>
                        </>
                     }
                     {user ? (
                        <button
                           className="btn btn-link text-white text-decoration"
                           onClick={handleSignOut}
                        >
                           Sign Out
                        </button>
                     ) : (
                        <Nav.Link as={Link} to="/login">
                           Login
                        </Nav.Link>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;
