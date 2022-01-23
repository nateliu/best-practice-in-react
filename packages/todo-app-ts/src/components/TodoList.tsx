import React, { FC, ReactElement, useReducer, useEffect, useCallback } from 'react'
import todoReducer from '../reducer/todoReducer';
import { ACTION_TYPE, IState, ITodo } from '../types/todoTypes';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

// comment out below line because has changed to use lazy load.
// const initialState:IState = {
//     todoList:[]
// }

function init(initTodoList: ITodo[]): IState {
    return {
        todoList: initTodoList
    }
}

const TodoList: FC = (): ReactElement => {
    // comment out below line because has changed to use useReducer
    // const [todoList, setTodoList] = useState<ITodo[]>([]);

    // comment out below line because has changed to use lazy load.
    // const [ state, dispatch] = useReducer(todoReducer,initialState)

    // lazy load
    const [state, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        // console.log(state.todoList)
        const list = localStorage.getItem('todoList' || '[]');
        if (list) {
            const todoLists = JSON.parse(list);
            dispatch({
                type: ACTION_TYPE.INIT_TODOLIST,
                payload: todoLists
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state.todoList))
    }, [state.todoList])


    const addTodo = useCallback((todo: ITodo) => {
        // comment out below line because has changed to use useReducer
        // setTodoList(todoList => [...todoList,todo]);
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, [])

    const removeTodo = useCallback((id: number) => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    }, [])

    const toggleTodo = useCallback((id: number) => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
    }, [])

    return (
        <div>
            <TodoInput
                addTodo={addTodo}
                todoList={state.todoList}
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
export default TodoList;
