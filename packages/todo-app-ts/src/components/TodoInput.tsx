import React, { FC, ReactElement, useRef } from 'react'
import { ITodo } from '../types/todoTypes'

interface IProps {
    addTodo: (todo: ITodo) => void,
    todoList: ITodo[]
}

const TodoInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {

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