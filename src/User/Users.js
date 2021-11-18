
import React, {useEffect, useContext} from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import Todolist from '../Todolist'
import UsersMap from './UsersMap'

export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    
    const [ users, getUsers ] = useResource(() => ({
        url: '/users',
        method: 'get'
      }))
      
    useEffect(getUsers, [])
    useEffect(() => {  
        if (users && users.data) 
        dispatch({ type: 'USERS', users: users.data})
    }, [users])

    const { data, isLoading } = users;
    return (
        <>
          {isLoading && 'Todos loading...'} <UsersMap/>
        </>
    )
}