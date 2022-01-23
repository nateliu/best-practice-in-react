export interface ITodo{
    id: number,
    content: string,
    completed:boolean
}

export interface IState{
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