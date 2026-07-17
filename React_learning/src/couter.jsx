import {useState, useEffect} from "react";

export default function Counter(){

    const [count, setCount] = useState(0);


    // useEffect is used when we need only one time runing of any part of the programme 
    // if we have not used the useEffect then the setInterval will set new clock every second and we will re render every clock every second and that go on increasing 
    useEffect(function(){        
        setInterval(function(){   // we are wanting the count every second increasing 
            setCount(count => count+1)    // we could have done this setCount(count+1)(means not giving the function as argument)(but here we are giving the function as the parameter )  but when we will use the [](dependency array) in the useEffect hook here it is empty 
        },1000)
    }, [])

    return(
        <div>
            <h1 id="text">{count}</h1>
        </div>
    )
}