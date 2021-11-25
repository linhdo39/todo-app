import React, { useContext } from 'react'
import HomeTodo from './HomeTodo';
import { ThemeContext, StateContext } from '../Contexts'
import { Card } from 'react-bootstrap';

export default function HomeTodoList() {
    const {state} = useContext(StateContext)
    const {secondaryColor} = useContext(ThemeContext)
    const {todos} = state;
    const items = todos
    return (
       <div>
            {items? items.map((p, i) => <HomeTodo {...p} id={p.id}
                                              user= {p.user}
                                              short ={true}
                                              title={p.title}
                                              create_date ={p.create_date}
                                              description ={p.description}
                                              key={'Todo-' + i} 
                                              />): <Card>
                                              <Card.Body>
                                                  <Card.Text>
                                                      No Todo Items Found
                                                  </Card.Text>
                                
                                              </Card.Body>
                                              </Card>}
        </div>
    )
}