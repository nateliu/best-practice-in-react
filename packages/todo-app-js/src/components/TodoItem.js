import React from 'react'

export default function TodoItem(props) {
    const { id, content, completed } = props.todo;
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => props.toggleTodo(id)} />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{content}</span>
            <button onClick={() => props.removeTodo(id)}>Delete</button>
        </div>
    )
}
