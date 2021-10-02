import Logout from './logout'
import Registration from './registration'
import Login from './login'

export default function User() {
     const user='Linh'
     if (user) {
          return <Logout user={user} />
     } else {
          return (
              <>
                <Login />
                <Registration />
              </>
          )
    }
}
