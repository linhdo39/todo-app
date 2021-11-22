
import React, {useEffect, useContext} from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import UsersList from '../Users/UsersList'

export default function UsersPage () {
    const { state, dispatch } = useContext(StateContext)
    
    const [ users, getUsers ] = useResource(() => ({
        url: '/users',
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
      }))
      
    useEffect(getUsers, [state.user.access_token])

    
    useEffect(() => {  
        if (users.data) 
        dispatch({ type: 'USERS', users: users.data})
    }, [users])

    const { data, isLoading } = users;
    return (
        <>
          {isLoading && 'Users loading...'} <UsersList/>
        </>
    )
}