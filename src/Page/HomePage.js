
import React, {useEffect, useContext} from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import HomeTodoList from '../Todos/HomeTodoList'

export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    
    const [ todos, getTodos ] = useResource(() => ({
        url: '/todos',
        method: 'get',
        headers: {"Authorization":`${state.user.access_token}`}
      }))
    
    const [ users, getUsers ] = useResource(() => ({
      url: '/users',
      headers: {"Authorization": `${state.user.access_token}`},
      method: 'get'
    }))

    useEffect(() => {
        getTodos()
    }, [state.user.access_token])
    

    useEffect(() => {  
        if (todos && todos.isLoading === false && todos.data) 
        dispatch({ type: 'GET_TODOS', todos: todos.data.todos})
    }, [todos])

    useEffect(getUsers, [state.user.access_token])

    
    useEffect(() => {  
        if (users.data) 
        dispatch({ type: 'USERS', users: users.data})
    }, [users])

    const { data, isLoading } = todos;

    return (
          <>
            {isLoading && 'Loading Todos...'} <HomeTodoList/>
          </>
      )
}