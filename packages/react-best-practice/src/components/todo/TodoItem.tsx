import React, { FC, ReactElement } from 'react'
import { ITodoItemProps } from '../../types/todo/todoTypes'

const TodoItem: FC<ITodoItemProps> = ({ todo, toggleTodo, removeTodo }): ReactElement => {
    const { id, content, completed } = todo;

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{content}</span>
            <button onClick={() => removeTodo(id)}>Delete</button>
        </div>
    )
}
export default TodoItem;
