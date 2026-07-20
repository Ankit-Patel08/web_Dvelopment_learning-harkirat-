import { useState } from "react";

export default function DynamicState() {
    const [count, setCount] = useState(0);

    function onClickHandler(){
        setCount(count+1);  // setCount trigger the reRendering
    }
    return(
        <div>
            <button onClick={onClickHandler}>count : {count} </button>
        </div>
    )
}