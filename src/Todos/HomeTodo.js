import React from 'react';
import { useContext } from 'react';
import { ThemeContext, StateContext } from '../Contexts'
import { Card } from 'react-bootstrap';
import { Link } from 'react-navi';

export default function HomeTodo({_id,user, title, create_date, description, short = false}) {
    const { secondaryColor } = useContext(ThemeContext)
    const {primaryColor} = useContext(ThemeContext)
    let processedDescription = description

     if (short) {
          if (description.length > 30) {
               processedDescription = description.substring(0, 30) + '...'
          }
     }
    return (
        <div>
        <Card style = {{background:secondaryColor}}>
          <Card.Body>
              <Card.Title><Link style={{ color: primaryColor }} href={`/todos/${_id}`}>{title}</Link>
              </Card.Title>
              <Card.Subtitle>
              <p> <b>Create by:</b> {user} on {create_date} </p> 
              </Card.Subtitle>
              <Card.Text>
                  {processedDescription}                  
              </Card.Text>
              {short && <Link style={{ color: primaryColor }} href={`/todos/${_id}`}>View full post</Link>}
            
          </Card.Body>
          </Card>
          <div>      </div>
          <hr/>
          </div>
    )
}
