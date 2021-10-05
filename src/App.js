import {useReducer, useEffect} from 'react';
import User from './User/UserBar'
import Create from './create'
import Todolist from './todolist'
import reducer from './todoReducer';

function App() {
    const initialTodos = [
        {
            id: new Date().getTime()*Math.random(),
            user: "Linh",
            title: "Homework",
            create_date: Date(Date.now()).toString(),
            description: "Try to finish the homework",
            completed: false,
            completed_date:''
        },
        {
            id: new Date().getTime()*Math.random(),
            user: "Linh",
            title: "House",
            create_date: Date(Date.now()).toString(),
            description: "Clean up the house",
            completed: false,
            completed_date:''
        },
        {
            id: new Date().getTime()*Math.random(),
            user: "Linh",
            title: "Cook",
            create_date: Date(Date.now()).toString(),
            description: "Cook dinner",
            completed: false,
            completed_date:''
        }
    ]

    const [state, dispatch] = useReducer(reducer, { user: '', todos: initialTodos })
    const {user, todos} = state;

    useEffect(() => {
        if (user) {
            document.title = `${user}’s Todo`
        } else {
            document.title = 'Todo'
        }
    }, [user])

    return (
        <div>
            <User user={user} dispatchUser={dispatch} />
        <br/><br/><hr/><br/>
            {user && <Create user={user} todos ={todos} dispatch={dispatch} /> }
        <Todolist Todos={todos} dispatch ={dispatch}/>
        </div>
    )
}

export default App;
