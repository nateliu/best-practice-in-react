import React, { useRef } from 'react'

export default function TodoInput(props) {
    const inputRef = useRef(null)
    const handleClick = ()=> {
        const val = inputRef.current.value.trim();

        if(val.length){
            const isExist = props.todoList.find(todo => todo.content === val);
            if(isExist){
                alert('already exist!');
                return;
            }

            props.addTodo({
                id: Date.now(),
                content:inputRef.current.value.trim(),
                completed:false
            })
            
            inputRef.current.value = '';
        }


    }
    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={()=>handleClick()}>Add</button>
        </div>
    )
}
