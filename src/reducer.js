function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTRATION':
            return action.username
        case 'LOGOUT':
            return ''
        case 'GET_USERS':
            return action.users
        default:
            return state;
    }
}

  function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                id: state.length,
                user: action.user,
                title: action.title,
                create_date: action.create_date,
                description: action.description,
                completed: false,
                completed_date: ""
            }
            return [newTodo, ...state ]
        case 'DELETE_TODO':
            return state.filter((p) => p.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map((p) => {
                if(p.id === action.id) {
                    p.completed = !action.completed;
                    p.completed_date = action.completed_date;
                }
                return p;
            })
        case 'GET_TODOS':
            return action.todos
        case 'GET_PROFILE':
            return state.filter((p) => p.username === action.username)
        default:
           return state;
    }
  }

  function usersReducer(state, action){
    switch (action.type) {
        case 'GET_USERS':
            return action.users
        default:
            return state;
        }
  }

  export default function reducer (state, action) {
    return {
        user: userReducer(state.user, action),
        users: usersReducer(state.users, action),
        todos: todoReducer(state.todos, action)
    }
}