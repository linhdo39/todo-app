import React from 'react'

import Logout from './logout'
import Registration from './registration'
import Login from './login'

export default function User({user, dispatchUser}) {
  if (user) {
      return <Logout user={user} dispatchUser={dispatchUser} />
  } else {
      return (
          <>
            <Login dispatchUser={dispatchUser} />
            <Register dispatchUser={dispatchUser} />
          </>
      )
  }
}
