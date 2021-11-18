import React, {useState, useReducer, useEffect} from 'react';
import HeaderBar from './Page/HeaderBar';
import HomePage from './Page/HomePage';
import Create from './Create';
import TodoPage from './Page/TodoPage';
import Profile from './User/Profile';
import Users from "./User/Users"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import { StateContext, ThemeContext } from './Contexts';
import reducer from './reducer';


function App() {

    const [state, dispatch] = useReducer(reducer, { user: '', users: [],todos: [] })
    const {user} = state

    const [ theme, setTheme ] = useState({
        primaryColor: '#CC5500',
        secondaryColor: '#E97451'
    })
    
    const routes = mount ({
        '/': route({view:<HomePage/>}),
        '/todo/create': route ({view:<Create/>}),
        '/todo/:id': route (req => 
            {return {view: <TodoPage id = {req.params.id}/>}}),
        '/users' :route({view:<Users/>}),
        '/users/:userId' : route (req => 
            {return {view: <Profile username = {req.params.username}/>}}),
    })

    return (
        <>
        <ThemeContext.Provider value = {theme}>
            <StateContext.Provider value={{state: state, dispatch: dispatch}}>
            <Router routes = {routes}>
                <Container>
                    <HeaderBar setTheme = {setTheme}></HeaderBar>
                    <View/>
                </Container>
            </Router>
            </StateContext.Provider>
        </ThemeContext.Provider>
        </>
      )
}

export default App;
