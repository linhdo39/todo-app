import React, {useContext, useEffect} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-navi';
import { ThemeContext, StateContext } from '../Contexts';
import ChangeTheme from '../ChangeTheme';
import UserBar from '../Authorization/UserBar';
import Header from './Header';


export default function HeaderBar({setTheme}){
    const theme = useContext(ThemeContext)
    const { state } = useContext(StateContext)
    const { user } = state
    const {primaryColor} = useContext(ThemeContext)
    useEffect(() => {
        if (user.username) {
            document.title = `${user.username}’s Blog` 
        } else {
            document.title = 'Blog'
        }
    }, [user.username])

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand  style = {{color :primaryColor}}> My Todo </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link> <Link href="/">Home</Link></Nav.Link>
                    {user.username && <Nav.Link><Link href="/users/">Show All Users</Link></Nav.Link>}
                    {user.username &&  <Nav.Link><Link href="/todos/create">Create New Todo</Link></Nav.Link>}
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