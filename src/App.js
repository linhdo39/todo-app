import React, {useState, useReducer, useEffect} from 'react';
import {useResource} from 'react-request-hook';
import User from './User/UserBar'
import Create from './create'
import Todolist from './todolist'
import reducer from './reducer';
import Header from './header';
import ChangeTheme from './changeTheme';
import { ThemeContext, StateContext } from './contexts';

function App() {
    const [ todos, getTodos ] = useResource(() => ({
        url: '/todos',
        method: 'get'
      }))
    
    const [ state, dispatch ] = useReducer(reducer, { user: '', todos: [] })

    useEffect(getTodos, [])
    
    useEffect(() => {  
        if (todos && todos.data) 
        dispatch({ type: 'GET_TODOS', todos: todos.data.reverse()})
    }, [todos])
    
    
    const {user} = state;
    useEffect(() => {
        if (user) {
            document.title = `${user}’s Blog` 
        } else {
            document.title = 'Blog'
        }
    }, [user])
    
    const [ theme, setTheme ] = useState({
        primaryColor: '#CC5500',
        secondaryColor: '#E97451'
    })

    const { data, isLoading } = todos;

    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <StateContext.Provider value={{state: state, dispatch: dispatch}}>
                    <Header text="To Do List" />
                    <ChangeTheme theme={theme} setTheme={setTheme} />
                    <User/>
                    <br/><br/><hr/><br/> 
                    {user && <Create /> }
                    <>
                        {isLoading && 'To do list loading...'} <Todolist />
                    </>
                </StateContext.Provider>
            </ThemeContext.Provider>
        </div>
      )
}

export default App;
