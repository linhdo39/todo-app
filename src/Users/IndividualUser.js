import React from 'react';
import { useContext } from 'react';
import { ThemeContext} from '../Contexts'
import { Card } from 'react-bootstrap';
import { Link } from 'react-navi';

export function IndividualUser({_id, username}){
    const { secondaryColor } = useContext(ThemeContext)
    const {primaryColor} = useContext(ThemeContext)
        return (
            <div><Card  style = {{background:secondaryColor}} >
              <Card.Body>
                  <Card.Title><Link style={{ color: primaryColor }} href={`/users/${_id}`}>{username}</Link>
                  </Card.Title>
              </Card.Body>
              </Card>
              <div> </div>
          <hr/>
          </div>
        )
    }
