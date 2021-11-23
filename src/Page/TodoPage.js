import React,{ useEffect, useContext } from "react"
import { StateContext } from '../Contexts'
import { useResource } from "react-request-hook"
import Todo from "../Todos/Todo"
import HomeTodo from "../Todos/HomeTodo"
import { Link } from 'react-navi'
import { useState } from "react"

export default function TodoPage ({ id }) {
    const {state} = useContext(StateContext);  
    const{user} = state
    const [ todo, getTodos ] = useResource(() => ({
        url: `/todos/${id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))
    
    const {users} = state;
    var navigation_id = useState("")
    users.map((p, i) => {
        if(p.username === user){
            navigation_id = p._id
        }
    })

    useEffect(getTodos, [id])
    if(user && todo.data){
        if(user.username === todo.data.user){
            return (
                <div>
                    {(todo && todo.data)
                        ? <Todo {...todo.data} />
                        : 'Loading...'
                    }
                    <hr />
                    <div><Link href="/">Go back to HomePage</Link></div>
                    <div><Link href={`/users/${navigation_id}`}>Go to this user's profile</Link></div>
                </div>
            )}}
    return(
        <div>
            {(todo && todo.data)
                    ? <HomeTodo {...todo.data} />
                    : 'Loading...'
            }
            <hr />
            <div><Link href="/">Go back to HomePage</Link></div>
            <div><Link href={`/users/${navigation_id}`}>Go to this user's profile</Link></div>

        </div>
    )
        
}
