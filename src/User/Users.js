import React from 'react';
import { useContext, useEffect } from 'react';
import { StateContext} from '../Contexts'
import { useResource } from 'react-request-hook';
import UsersMap from './UsersMap';
import { Link } from 'react-navi';

export default function Users () {
  const { state, dispatch } = useContext(StateContext)
    
  const [ users, getUsers ] = useResource(() => ({
      url: '/users',
      method: 'get'
    }))

  useEffect(getUsers, [])
  useEffect(() => {  
      if (users && users.data) 
      dispatch({ type: 'GET_USERS', users: users.data.reverse()})
  }, [users])

  const { data, isLoading } = users;
  return (
      <>
        {isLoading && 'Users loading...'} <UsersMap/>
      </>
  )
}