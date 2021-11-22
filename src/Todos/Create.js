import React, {useContext, useState} from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import { useEffect } from 'react'
import { useNavigation } from 'react-navi'

export default function Create () {
   const [ title, setTitle ] = useState('')
   const [ description, setDescription ] = useState('')
   const navigation = useNavigation()
   const {state, dispatch} = useContext(StateContext)
   const {user} = state;

   const [Todo , createTodo ] = useResource(({user, title, description}) => ({
      url: '/todos',
      method: 'post',
      headers: {"Authorization": `${state.user.access_token}`},
      data: {user, title, description}
  }))

   function createHandler() {
      createTodo({user:user.username, title, description})
   }
   
   function titleHandler (evt) { setTitle(evt.target.value) }

   function descriptionHandler (evt) { setDescription(evt.target.value) }
   
   useEffect(() => {
       if (Todo && Todo.isLoading === false && Todo.data) {
           dispatch({ type: 'CREATE_TODO', id:Todo.data.id, user: Todo.data.user, create_date:Todo.data.create_date,
                     title: Todo.data.title, description: Todo.data.description, completed:Todo.data.completed, completed_date:Todo.data.completed_date})
            navigation.navigate(`/todos/${Todo.data.id}`)
       }
   }, [Todo])


   return (
      <form onSubmit={event => {event.preventDefault(); createHandler();} }>
      <br/>
         <div>User: <b>{user.username}</b></div>
         <div>
            <label htmlFor="create-title">Title:</label>
            <input type="text" value={title} onChange={titleHandler} name="create-title" id="create-title" />
         </div>
         <div>
            <label htmlFor="create-description">Description: </label>
            <textarea value={description} onChange={descriptionHandler}/>
         </div>

         <input type="submit" value="Create" />
      </form>
   )
}
