import React, { useContext } from 'react'
import Todo from './Todo'
import { StateContext } from '../Contexts'


export default function Todolist() {
    const {state} = useContext(StateContext)
    const {todos} = state;
    return (
       <div>
            {todos.map((p, i) => <Todo {...p} id={p.id}
                                              user= {p.user}
                                              short ={true}
                                              title={p.title}
                                              create_date ={p.create_date}
                                              description ={p.description}
                                              completed= {p.completed}
                                              completed_date ={p.completed_date}
                                              key={'Todo-' + i} 
                                              />)}
        </div>
    )
}