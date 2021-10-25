import React from 'react';
import { useContext } from 'react';
import { ThemeContext, StateContext } from './contexts'
import { useResource } from 'react-request-hook';
export default function Todo({id,user, title, create_date, description,completed,completed_date}) {
    
    const { secondaryColor } = useContext(ThemeContext)
    const {dispatch} = useContext(StateContext)
    const [Todo , updateTodo ] = useResource(() => ({
        url: '/todos/'+ parseInt(id),
        method: 'patch',
        data: {completed:!completed,completed_date:new Date(Date.now()).toLocaleDateString('en-us')}
    }))

    const [todo , deleteTodo ] = useResource(() => ({
        url: '/todos/' +id,
        method: 'delete'
    }))

    function deleteHandler (evt) { 
        deleteTodo({id})
    }
    
    function completeHandler (evt) { 
        updateTodo({completed:completed, completed_date:completed_date})
    }

    return (
        <div>
            <h3 style ={{color: secondaryColor}}>{title}</h3>
            <p><b>Create by:</b> {user}</p>
            <p><b>Description:</b> {description}</p>
            <p><b>Date Created:</b> {create_date} </p>
            <p><input type='checkbox' checked={completed} onClick={e => {dispatch({type: 'TOGGLE_TODO',completed:completed, id:id, completed_date:new Date(Date.now()).toLocaleDateString('en-us') });completeHandler()}} /> Complete</p>
            {completed && <><b>Date Completed:</b> <i>{completed_date} </i></>}
            <p><button onClick={e =>  {dispatch({type:'DELETE_TODO', id:id});deleteTodo()}}>Delete</button> </p>
        </div>
    )
}