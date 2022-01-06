import React, { forwardRef, ReactElement, useState, useRef, useImperativeHandle } from "react";
import { IChildInputProps, IInputWithLabelProps } from "./types"


const InputWithLabel = ({ label, myRef }: IInputWithLabelProps): ReactElement => {
    const [value, setValue] = useState("");

    const innerRef = useRef<HTMLInputElement>(null);
    
    useImperativeHandle(myRef, () => ({
        getValue,
        focus() {
            const node = innerRef.current;
            node?.focus();
        }
    }));

    const getValue = () => {
        return value;
    }

    const handleChange = (e: any) => {
        e.preventDefault();
        console.log(`message from child.value=${e.target.value}`)
        const value = e.target.value;
        setValue(value);
    };

    return (
        <div>
            <span>{label}:</span>
            <input type="text" ref={innerRef} value={value} onChange={handleChange} />
        </div>
    );
}

const ChildInput = forwardRef(({ label }: IChildInputProps, ref: any) => (
    <InputWithLabel label={label} myRef={ref} />
));

export default ChildInput;
