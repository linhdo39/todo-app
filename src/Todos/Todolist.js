import React, { useContext } from 'react'
import Todo from './Todo'
import { ThemeContext, StateContext } from '../Contexts'
import { Card } from 'react-bootstrap'
import { Link } from 'react-navi'

export default function Todolist() {
    const {state} = useContext(StateContext)
    const {todos} = state;
    const {secondaryColor} = useContext(ThemeContext)
    return (
       <div>
            {todos.length > 0? todos.map((p, i) => <Todo {...p} id={p.id}
                                              user= {p.user}
                                              short ={true}
                                              title={p.title}
                                              create_date ={p.create_date}
                                              description ={p.description}
                                              completed= {p.completed}
                                              completed_date ={p.completed_date}
                                              key={'Todo-' + i} 
                                              />): 
                                <Card style = {{background:secondaryColor}}>
                                <Card.Body>
                                    <Card.Text>
                                        No To-do Item. <Link href="/todos/create"> You can create new to-do item here </Link>                   
                                    </Card.Text>
                                </Card.Body>
                                </Card>}
        </div>
    )
}