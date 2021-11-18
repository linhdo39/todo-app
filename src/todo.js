import React from 'react';
import { useContext } from 'react';
import { ThemeContext, StateContext } from './Contexts'
import { useResource } from 'react-request-hook';
import { Card } from 'react-bootstrap';
import { Link } from 'react-navi';
import {Button} from 'react-bootstrap'

export default function Todo({id,user, title, create_date, description,completed,completed_date, short = false}) {
    
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

    let processedDescription = description

     if (short) {
          if (description.length > 30) {
               processedDescription = description.substring(0, 30) + '...'
          }
     }

    return (
        <Card>
          <Card.Body>
              <Card.Title><Link style={{ color: secondaryColor }} href={`/todo/${id}`}>{title}</Link>
              </Card.Title>
              <Card.Subtitle>
              <p> <b>Create by:</b> {user} on {create_date} </p> 
              </Card.Subtitle>
              <Card.Text>
                  {processedDescription}                  
              </Card.Text>
              <div><input type='checkbox' checked={completed} onClick={e => 
                    {dispatch({type: 'TOGGLE_TODO',completed:completed, id:id, completed_date:new Date(Date.now()).toLocaleDateString('en-us') });completeHandler()}} /> 
                 <b> Complete? </b><br/>
                {completed && <><b>Date Completed:</b> <i>{completed_date} </i></>}
                </div>
                <br/>
              <Button  style = {{background:secondaryColor}} onClick = {e =>  {dispatch({type:'DELETE_TODO', id:id});deleteTodo()}}> Delete</Button>
              {short && <Link href={`/todo/${id}`}>View full post</Link>}
            
          </Card.Body>
          </Card>
    )
}