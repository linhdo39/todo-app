function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                'username': action.username,
                'access_token': action.access_token
            }
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
            }
        case 'GET_USERS':
            return action.user
        default:
            return state;
    }
}

  function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                id: action.id,
                user: action.user,
                title: action.title,
                create_date: action.create_date,
                description: action.description,
                completed: action.completed,
                completed_date: action.completed_date
            }
            return [newTodo,...state]
        case 'DELETE_TODO':
            return state.filter((p) => p._id !== action._id)
        case 'TOGGLE_TODO':
            console.log(action)
            return state.map((p) => {
                if(p._id === action._id) {
                    p.completed = action.completed;
                    p.completed_date = action.completed_date;
                }
                return p;
            })
        case 'GET_TODOS':
            return action.todos
        case 'GET_PROFILE':
            return action.users
        default:
           return state;
    }
  }

  function usersReducer(state, action){
    switch (action.type) {
        case 'USERS':
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