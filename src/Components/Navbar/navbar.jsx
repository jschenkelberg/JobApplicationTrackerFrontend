import React from 'react';
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';
import AddApplication from '../AddApplication/addApplication';
import DeleteApplication from '../DeleteApplication/deleteApplication';


const Navigation = ({getAllApplications, applications}) => {
    return ( 
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand>ApplicationTracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Applications" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Add Application <AddApplication getAllApplications={getAllApplications}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Update Application</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Delete Application<DeleteApplication getAllApplications={getAllApplications} applications={applications} /></NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Job Boards" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://www.linkedin.com/jobs/" target="_blank">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.indeed.com/" target="_blank">Indeed</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.ziprecruiter.com/" target="_blank">ZipRecruiter</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
     );
}
 
export default Navigation;