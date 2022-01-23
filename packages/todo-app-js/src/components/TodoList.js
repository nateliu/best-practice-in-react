import React, { useReducer, useEffect, useCallback } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import todoReducer from '../reducer/todoReducer'

// comment out below line because has changed to use lazy load.
// const initialState:IState = {
//     todoList:[]
// }

function init(initTodoList) {
    return {
        todoList: initTodoList
    }
}

export default function TodoList() {
    // comment out below line because has changed to use useReducer
    // const [todoList,setTodoList] = useState([]);
    const [state, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        // console.log(state.todoList)
        const list = localStorage.getItem('todoList' || '[]');
        if (list) {
            const todoLists = JSON.parse(list);
            dispatch({
                type: "INIT_TODOLIST",
                payload: todoLists
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state.todoList))
    }, [state.todoList])

    const addTodo = useCallback(todo => {
         // comment out below line because has changed to use useReducer.
        // setTodoList(todoList => [...todoList,todo]);
        dispatch({
            type: "ADD_TODO",
            payload: todo
        })
    }, [])


    const removeTodo = useCallback((id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    }, [])

  
    const toggleTodo = useCallback((id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id
        })
    }, [])

    return (
        <div>
            <TodoInput
                addTodo={addTodo}
                todoList = {state.todoList}
            />
            {
                state.todoList &&
                state.todoList.map(todo => {
                    return <TodoItem
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                })
            }
        </div>
    )
}
