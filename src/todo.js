import React from 'react';

export default function Todo({id,user, title, create_date, description,completed,completed_date,dispatch}) {
    function checkboxHandler(event) {
        dispatch({type: 'TOGGLE_TODO',completed, id })
    }

    function deleteHandler(event){
        dispatch({type:'DELETE_TODO', id})
    }
    return (
        <div>
            <h3>{title}</h3>
            <p> {id}</p>
            <p>Create by: {user}</p>
            <p>Description: {description}</p>
            <p>Date Created: {create_date} </p>
            <p><input type='checkbox' value={completed} onChange={e => {checkboxHandler();}} /> Complete</p>
            <p>Date Completed: {completed_date} </p>
            <p><button onClick={e => {deleteHandler();}}>Delete</button> </p>
        </div>
    )
}