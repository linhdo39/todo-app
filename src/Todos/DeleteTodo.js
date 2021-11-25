import React from 'react';
import { useContext } from 'react';
import { ThemeContext} from '../Contexts'
import { Card } from 'react-bootstrap';
import { Link } from 'react-navi';

export default function DeleteTodo({id}){
    console.log(id)
    const { secondaryColor } = useContext(ThemeContext)
    const { primaryColor } = useContext(ThemeContext)

        return (
            <Card style = {{background:secondaryColor}}>
              <Card.Body>
                  <Card.Text>
                      This Todo item has been deleted
                  </Card.Text>
                <Link style={{ color: primaryColor }} href={`/users/${id}`}>Go back to Profile</Link>

              </Card.Body>
              </Card>
        )
    }
