import React from 'react'
import Todo from './todo'

export default function Todolist({Todos = []}) {
    return (
        <div>
            {Todos.map((p, i) => <Todo {...p} author={p.author} title={p.title} description ={p.description}  key={'todo-' + i} />)}
        </div>
    )
}