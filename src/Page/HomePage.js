
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
      
    useEffect(() => {
        getTodos()
    }, [state.user.access_token])
    

    useEffect(() => {  
        if (todos && todos.isLoading === false && todos.data) 
        dispatch({ type: 'GET_TODOS', todos: todos.data.todos})
    }, [todos])

    const { data, isLoading } = todos;

    return (
          <>
            {isLoading && 'Loading Todos...'} <HomeTodoList/>
          </>
      )
}