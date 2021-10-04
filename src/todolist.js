import React from 'react'
import Todo from './todo'

export default function Todolist({Todos = [],dispatch}) {
    return (
        <div>
            {Todos.map((p, i) => <Todo {...p} key = {p.id}
                                              id= {p.id}
                                              user= {p.user}
                                              title={p.title}
                                              create_date ={p.create_date}
                                              description ={p.description}
                                              completed= {p.completed}
                                              completed_date ={p.completed_date}
                                              dispatch={dispatch}
                                              />)}
        </div>
    )
}