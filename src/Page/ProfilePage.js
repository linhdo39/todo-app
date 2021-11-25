import React, {useEffect, useContext} from "react"
import { useResource } from "react-request-hook"
import { Link } from 'react-navi'
import Todolist from "../Todos/Todolist"
import { StateContext } from "../Contexts"
import { useState } from "react"
import HomeTodoList from "../Todos/HomeTodoList"

export default function Profile ({ id }) {
  const { state, dispatch } = useContext(StateContext) 
  const todos = useState([])
  const [isInitialRender, setIsInitialRender] = useState(true);
  const{user} = state

  const [ users, getUsers ] = useResource(() => ({
        url: `/users/${id}`,
        method: 'get',
        headers: {"Authorization": `${state.user.access_token}`}
    }))

  useEffect(getUsers, [state.user.access_token])

  useEffect(() => {  
    if (users && users.isLoading === false && users.data ) 
      if(isInitialRender){
        document.title = `${users.data.username}’s Blog` 
        dispatch({type:'GET_PROFILE', users:users.data.user_todos})
        setIsInitialRender(false);
      }
      else {
        document.title = 'Blog'
      }
  }, [todos])


  if(users.data && users.isLoading === false){
      if(user.username === users.data.username){
        return (
          <div>
              <Todolist/>
              <hr />
              <div><Link href="/users">Go back</Link></div>
          </div>
       )}
      else{
        return(
          <div>
              <HomeTodoList/>
              <hr />
              <div><Link href="/users">Go back</Link></div>
          </div>
        )}
}
return (
    <div>
        <div><Link href="/users">Go back</Link></div>
    </div>
)
}