import React, {useState, useReducer} from 'react';
import HeaderBar from './Page/HeaderBar';
import HomePage from './Page/HomePage';
import Create from './Todos/Create';
import TodoPage from './Page/TodoPage';
import Profile from './Page/ProfilePage';
import UsersPage from "./Page/UsersPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import { StateContext, ThemeContext } from './Contexts';
import reducer from './reducer';
import DeleteTodo from './Todos/DeleteTodo';

function App() {

    const [state, dispatch] = useReducer(reducer, { user: {}, users: [], todos: [] })

    const [ theme, setTheme ] = useState({
        name:'Default',
        primaryColor: '#000000',
        secondaryColor: '#FFFFFF',
    })
    
    const routes = mount ({
        '/': route({view:<HomePage/>}),
        '/todos/create': route ({view:<Create/>}),
        '/todos/:id': route (req => {
            return { view: <TodoPage id={req.params.id} /> }}),
        '/users' :route({view:<UsersPage/>}),
        '/users/:id' : route (req => 
            {return {view:<Profile id = {req.params.id}/>}}),
        '/todos/delete/:id': route (req => {
            return { view: <DeleteTodo id={req.params.id} /> }}),  
    })

    return (
        <>
        <ThemeContext.Provider value = {theme}>
            <StateContext.Provider value={{state: state, dispatch: dispatch}}>
            <Router routes = {routes}>
                <Container> 
                    <HeaderBar setTheme = {setTheme}></HeaderBar>
                    <hr/>
                    <View/>
                </Container>
            </Router>
            </StateContext.Provider>
        </ThemeContext.Provider>
        </>
      )
}

export default App;
