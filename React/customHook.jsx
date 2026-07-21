// CUSTOM HOOK -> it's a normal looking function whihc start with "use" and it can use other hooks inside it. It is a way to reuse logic across multiple components.
// A normal functio should not use hooks inside it because hooks can only be used inside the functional component or custom hook.
//  So if we want to use the same logic in multiple components then we can create a custom hook and use that custom hook in multiple components.


import {useState} from "react";

function useCounter(){    // created our custom hook
    const [Count, setCount] = useState(0);

    function increaseCount(){
        setCount(count => count+1);
    }

    return {count, increaseCount};
}

 export default function App(){

    return (
      <div>
        <increase />   // means we can now call that counter hook as a function and every time they are called 
        <increase />   // they have independent variables they do not interfair with each other 
        <increase />
      </div>
    );
}


function increase(){
    const [count, increaseCount] = useCounter();

    return <div>
    <button onClick={increaseCount}> increase:{count}</button>
    </div>
}

