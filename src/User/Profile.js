
import React, {useEffect, useContext} from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import Todolist from '../Todolist'

export default function Profile ({username}) {
    const { state, dispatch } = useContext(StateContext)
    const {todos} = state;
    
    useEffect(() => {  
        if (todos && todos.data) 
          dispatch({ type: 'GET_PROFILE', username: username, todos: todos.data})
    }, [todos])

    const { data, isLoading } = todos;
    return (
        <>
          {isLoading && 'Todos loading...'} <Todolist/>
        </>
    )
}