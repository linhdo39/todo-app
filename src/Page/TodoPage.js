import React, {useEffect} from "react"
import { useResource } from "react-request-hook"
import Todo from "../Todo"
import { Link } from 'react-navi'

export default function TodoPage ({ id }) {
    const [ todo, getTodos ] = useResource(() => ({
        url: '/todos/' + parseInt(id),
        method: 'get'
    }))

    useEffect(getTodos, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} />
                : 'Loading...'
            }
            <hr />
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}
