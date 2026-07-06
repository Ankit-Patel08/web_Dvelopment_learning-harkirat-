import React from "react";

function App() {
    const [count, setCount] = React.useState(0);  // this is how we define the state in react and this is the hook of react
                                                  // anything which start with use is a hook in react and this is the way to define the state in react
    return (
        <div>
            <Button count={count} setCount={setCount}></Button>
        </div>
    )
}

function Button(props) {    // here b is B suntax for react 
    function onButtonClick() {
        props.setCount(props.count + 1);
    }
    return <button onClick={onButtonClick}>Count: {props.count}</button>
                                //OR 
    // return React.createElement("button", { onClick: onButtonClick }, `Count: ${props.count}`);
}
export default App; 