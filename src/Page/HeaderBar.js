import React, {useContext, useEffect} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-navi';
import { ThemeContext, StateContext } from '../Contexts';
import Create from '../Create';
import ChangeTheme from '../ChangeTheme';
import UserBar from '../User/UserBar';
import Header from '../Header';


export default function HeaderBar({setTheme}){
    const theme = useContext(ThemeContext)
    const { state } = useContext(StateContext)
    const { user } = state

    useEffect(() => {
        if (user) {
            document.title = `${user}’s Blog` 
        } else {
            document.title = 'Blog'
        }
    }, [user])

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><Header text="My Todo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {user && <Nav.Link><Link href="/users/">Show All Users</Link></Nav.Link>}
                </Nav>
                <Nav className="me-auto">
                    {user && <Nav.Link><Link href="/todo/create">Create New Todo</Link></Nav.Link>}
                    <ChangeTheme theme={theme} setTheme={setTheme} />
                </Nav>
               
                <React.Suspense fallback={"Loading..."}>
                <UserBar />
                </React.Suspense>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}