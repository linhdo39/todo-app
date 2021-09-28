import React from 'react'

export default function Create ({user}) {
     return (
           <form onSubmit={e => e.preventDefault()}>
              <br/>
              <div>User: <b>{user}</b></div>
                   <div>
                       <label htmlFor="create-title">Title:</label>
                       <input type="text" name="create-title" id="create-title" />
                   </div>
                   <div>
                       <label htmlFor="create-description">Description: </label>
                       <textarea />
                   </div>
                   <div>
                      <label htmlFor="create-date"> Create Date: {Date(Date.now()).toString()}</label>
                   </div>
              <input type="submit" value="Create" />
           </form>
          )
 }