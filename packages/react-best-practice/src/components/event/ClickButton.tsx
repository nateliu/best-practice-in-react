import React, { FC, ReactElement } from 'react'

const ClickButton: FC = (): ReactElement => {

    const handleClick = (e: any) => {
        console.log(`this is passed any parameter:${e}`);
        console.log(`this is from e.id:${e.target.id}`);
        console.log(`this is e.data:${e.currentTarget.getAttribute('data-xxx')}`);
    }

    // const handleClick2 = (e: string) => {
    //     console.log(`this is passed string parameter:${e}`);
    // }

    const handleClick3 = (e: any, id: string) => {
        console.log(`this is passed id:${id}`);
        console.log(`this is from e.id:${e.target.id}`);
        console.log(`this is e.data:${e.currentTarget.getAttribute('data-xxx')}`);
    }

    return (
        <div>
            <button id="123" data-xxx="789" onClick={handleClick}>
                Click me1
            </button>

            {/* cannot write like this: */}
            {/* <button id="1234" data-xxx="7890" onClick={handleClick2('123')}>
                Click me2
            </button> */}


            <button id="456" data-xxx="78900" onClick={(e) => handleClick3(e, '123456')}>
                Click me3
            </button>
        </div>
    )
}

export default ClickButton;