import React, {useState} from 'react'

export default function Create ({user, todos, dispatch}) {
     const [ title, setTitle ] = useState('')
     const [ description, setDescription ] = useState('')

     function titleHandler (event) {
        setTitle(event.target.value)
     }

     function descriptionHandler (event) {
        setDescription(event.target.value)
     }

     function createHandler() {
        dispatch({type: 'CREATE_TODO', id:new Date().getTime()*Math.random(), user, title, create_date: Date(Date.now()).toString(), description, completed:false, completed_date: ''})
     }

     return (
           <form onSubmit={event => {event.preventDefault(); createHandler();} }>
              <br/>
              <div>User: <b>{user}</b></div>
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