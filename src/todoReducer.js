function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTRATION':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

  function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                id:action.id,
                user: action.user,
                title: action.title,
                create_date: action.create_date,
                description: action.description,
                completed: action.completed,
                completed_date: action.completed_date
            }
            return [newTodo, ...state ]
        case 'DELETE_TODO':
            const newList = state.filter((todo) => todo.id !== action.id);
            state = newList
            return [...state]
        case 'TOGGLE_TODO':
            state.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed= !action.completed;
                    todo.completed_date = Date(Date.now()).toString();
                }
                return todo;
            });
            return [...state]
        default:
           return state;
    }
  }


  export default function reducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}