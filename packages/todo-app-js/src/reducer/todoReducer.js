export default function todoReducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case "INIT_TODOLIST":
            return {
                ...state,
                todoList: payload
            }
        case "ADD_TODO":
            return {
                ...state,
                todoList: [...state.todoList, payload]
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== payload)
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    return todo.id === payload ? {
                        ...todo,
                        completed: !todo.completed
                    } : {
                        ...todo
                    }
                })
            }
        default:
            return state;
    }
}
