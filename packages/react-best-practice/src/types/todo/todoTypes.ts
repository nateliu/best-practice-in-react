export interface ITodo{
    id: number,
    content: string,
    completed:boolean
}

export interface ITodoState{
    todoList: ITodo[]
}

export interface ITodoItemProps {
    todo: ITodo,
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void
}

export interface ITodoInputProps {
    addTodo: (todo: ITodo) => void,
    todoList: ITodo[]
}

export interface IAction{
    type: ACTION_TYPE,
    payload: ITodo | ITodo[] | number  //payload can be array and number.
}

export enum ACTION_TYPE{
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    TOGGLE_TODO = 'toggleTodo',
    INIT_TODOLIST = 'initTodoList'
}