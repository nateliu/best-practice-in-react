import React, { FC, ReactElement, useRef } from 'react'
import { ITodoInputProps } from '../../types/todo/todoTypes'

const TodoInput: FC<ITodoInputProps> = ({ addTodo, todoList }): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null);

    const addItem = (): void => {

        const val: string = inputRef.current!.value.trim();

        if (val.length) {
            const isExist = todoList.find(todo => todo.content === val);
            if (isExist) {
                alert('already exist!');
                return;
            }

            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            })

            inputRef.current!.value = '';
        }
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default TodoInput