import React, { useContext } from 'react'

import Logout from './logout'
import Registration from './registration'
import Login from './login'
import { StateContext } from '../contexts'

export default function User() {
  const {state} = useContext(StateContext)
  if (state.user) {
    return <Logout/>
  } 
  else {
    return (
      <>
      <Login/>
      <Registration/>
      </>
    )
  }
}
