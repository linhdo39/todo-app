import React, { useContext } from 'react'
import HomeTodo from './HomeTodo';
import { StateContext } from '../Contexts'


export default function HomeTodoList() {
    const {state} = useContext(StateContext)
    const {todos} = state;
    const items = todos
    return (
       <div>
            {items.map((p, i) => <HomeTodo {...p} id={p.id}
                                              user= {p.user}
                                              short ={true}
                                              title={p.title}
                                              create_date ={p.create_date}
                                              description ={p.description}
                                              key={'Todo-' + i} 
                                              />)}
        </div>
    )
}