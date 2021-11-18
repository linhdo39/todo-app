import React, {useEffect, useContext} from "react"
import { useResource } from "react-request-hook"
import Todo from "../Todo"
import { Link } from 'react-navi'
import Todolist from "../Todolist"
import { StateContext } from "../Contexts"

export default function Profile ({ id }) {
  const { state, dispatch } = useContext(StateContext)

  const [ user, getUsers ] = useResource(() => ({
        url: '/users/' + parseInt(id),
        method: 'get'
    }))

    useEffect(getUsers, [id])

    const [ todos, getTodos ] = useResource(() => ({
      url: '/todos',
      method: 'get'
    }))
    
    useEffect(() => {
      if (user && user.data) {
          document.title = `${user.data.username}’s Blog` 
      } else {
          document.title = 'Blog'
      }
  }, [user])

    useEffect(getTodos, [])
    useEffect(() => {  
        if (todos && todos.data) 
        dispatch({ type: 'GET_TODOS', todos: todos.data.reverse()})
    }, [todos])

    useEffect(() => {  
        if (user && user.data) {
          dispatch({ type: 'GET_PROFILE', user:user.data})
        }
    }, [todos])

    const { data, isLoading } = todos;
      return (
          <div>
              <Todolist/>
              <hr />
              <div><Link href="/">Go back</Link></div>
          </div>
      )
}