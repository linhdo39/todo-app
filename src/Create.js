import React, {useContext, useState} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'
import { useEffect } from 'react'
import { useNavigation } from 'react-navi'

export default function Create () {
   const [ title, setTitle ] = useState('')
   const [ description, setDescription ] = useState('')
   const navigation = useNavigation()
   const {state, dispatch} = useContext(StateContext)
   const {id} = state;
   const {user} = state;

   const [Todo , createTodo ] = useResource(({id, user, title, create_date, description, completed,completed_date }) => ({
      url: '/todos',
      method: 'post',
      data: {id, user, title, create_date, description, completed,completed_date }
  }))

   function createHandler() {
      createTodo({user:user, title, create_date: new Date(Date.now()).toLocaleDateString('en-us'), description, completed:false, completed_date:undefined})
   }
   
   function titleHandler (evt) { setTitle(evt.target.value) }

   function descriptionHandler (evt) { setDescription(evt.target.value) }

   useEffect(() => {
       if (Todo && Todo.isLoading === false && Todo.data) {
           dispatch({ type: 'CREATE_TODO', id, user: user, create_date:new Date(Date.now()).toLocaleDateString('en-us'),title: Todo.data.title, description: Todo.data.description})
           console.log(Todo.data.id)
           navigation.navigate('/todo/' + parseInt(Todo.data.id))
       }
   }, [Todo])


   return (
      <form onSubmit={event => {event.preventDefault(); createHandler();} }>
      <br/>
         <div>User: <b>{state.user}</b></div>
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
