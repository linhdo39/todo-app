import React from 'react';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { ThemeContext, StateContext } from '../Contexts'
import { useResource } from 'react-request-hook';
import { Card } from 'react-bootstrap';
import { Link } from 'react-navi';
import {Button} from 'react-bootstrap'
import { useNavigation } from 'react-navi'

export default function Todo({_id,user, title, create_date, description,completed,completed_date, short = false}) {
    const {state, dispatch} = useContext(StateContext)
    const { secondaryColor } = useContext(ThemeContext)
    const { primaryColor } = useContext(ThemeContext)
    const {users} = state;
    const navigation = useNavigation()
    const [checkbox, setCheckBox] = useState('')

    function checkboxHandler (evt) { 
		setCheckBox(evt.target.value) 
	}

    const [Todo, getTodos ] = useResource(() => ({
        url: `/todos/${_id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))

    const [toggledTodo , updateTodo ] = useResource(() => ({
        url: `/todos/${_id}`,
        method: 'patch',
        headers: {"Authorization": `${state.user.access_token}`},
        data: {completed:!completed,completed_date:new Date(Date.now()).toLocaleDateString('en-us')}
    }))

    const [todo , deleteTodo ] = useResource(() => ({
        url: `/todos/${_id}`,
        method: 'delete',
        headers: {"Authorization": `${state.user.access_token}`}
    }))

    var navigation_id = useState("")
    users.map((p, i) => {
        if(p.username === user){
            navigation_id = p._id
        }
    })

    useEffect(() => {
        if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
            dispatch({type: 'TOGGLE_TODO', completed:toggledTodo.data.completed, completed_date:toggledTodo.data.completed_date, _id})
        }
    }, [toggledTodo])

    useEffect(() => {
        if(todo && todo.data &&todo.isLoading ===false){
            dispatch({type: 'DELETE_TODO', _id: _id})
            navigation.navigate(`/todos/delete/${navigation_id}`)
        }
    }, [todo])

    useEffect(getTodos, [_id])
    let processedDescription = description

     if (short) {
          if (description.length > 30) {
               processedDescription = description.substring(0, 30) + '...'
          }
     }
     
    if(toggledTodo.data) {
        completed = toggledTodo.data.completed
        completed_date = toggledTodo.data.completed_date
    }

     return (
        <Card>
          <Card.Body>
              <Card.Title><Link style={{ color: secondaryColor }} href={`/todos/${_id}`}>{title}</Link>
              </Card.Title>
              <Card.Subtitle>
              <p> <b>Create by:</b> {user} on {create_date} </p> 
              </Card.Subtitle>
              <Card.Text>
                  {processedDescription}                  
              </Card.Text>
              <div><input type='checkbox' checked={completed} onChange ={checkboxHandler} onClick={e => {updateTodo(_id, e.target.checked)}} /> 
                 <b> Complete? </b><br/>
                {completed &&<><b>Date Completed:</b> <i>{completed_date} </i></>}
                </div>
                <br/>
              <Button  background-color={{color: secondaryColor}}  onClick = {e =>  deleteTodo(_id)}> Delete</Button>
              <div>{short && <Link href={`/todos/${_id}`}>View full post</Link>}</div>
            
          </Card.Body>
          </Card>
    )
}
