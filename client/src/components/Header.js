import { Container, Navbar, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link className='navbar-brand' to="/">Meeting Scheduler</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link  className="nav-link" to="/emp-list">Employees</Link>
                            <Nav className="me-auto">
                            <Link  className="nav-link" to="/act-list">ActionItem</Link>
                            <Link  className="nav-link" to="/mec-list">Meetings</Link>
                            <Link  className="nav-link" to="/fed-list">Feedbacks</Link>
                        </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
