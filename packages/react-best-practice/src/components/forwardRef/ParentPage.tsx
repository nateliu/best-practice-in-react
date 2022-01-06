import React, { FC, ReactElement, useRef } from 'react';
import ChildInput from './ChildInput';

const ParentPage: FC = (): ReactElement => {
    const myRef = useRef<any>();

    const handleClick = () => {
        const node = myRef.current;
        console.log(node);
        console.log(`the value '${node.getValue()}' from Child fucntion getValue()`);
        node.focus();
    };

    return (
        <div>
            <ChildInput label={"Child Name"} ref={myRef} />
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default ParentPage;
