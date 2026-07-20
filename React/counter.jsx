import { clear } from "node:console";
import {useState, useEffect} from "react";

//conditional rendering is used when we want to show the different content on the basis of the condition
// example 
 export default function Counter2(){
    const [counterVisible, setCounterVisible] = useState(true);

    useEffect(function(){    
        setInterval(function(){    // making the counter visible and invisible after every 3 second
            setCounterVisible(c => !c) // 
        },3000)
    },[])

    return(
        <div>
            {counterVisible ? <Counter /> : null}
        </div> 
    )
 }

export function Counter(){

    const [count, setCount] = useState(0);

    // useEffect is used when we need only one time runing of any part of the programme 
    // if we have not used the useEffect then the setInterval will set new clock every second and we will re render every clock every second and that go on increasing 
    useEffect(function(){        
      let clock = setInterval(function(){   // we are wanting the count every second increasing 
            setCount(count => count+1)    // we could have done this setCount(count+1)(means not giving the function as argument)(but here we are giving the function as the parameter )  but when we will use the [](dependency array) in the useEffect hook here it is empty 
        },1000)

    return () => {    // this is a clean up function which will be called when the component is unmounted and this will clear the interval when we unmount the component
        clearInterval(clock);
    };


    }, [])

    // unmounting the component means when we are removing the component from the dom and when we are removing
    //  the component from the dom then we want to clear the interval because if we will not clear the interval
    //  then it will keep on running in the background and it will keep on increasing the count variable and that
    //  will cause memory leak and that will cause performance issue so we need to clear the interval when we unmount the component
     // this will clear the interval when we unmount the component

    return(
        <div>
            <h1 id="text">{count}</h1>
        </div>
    )
}





// here the count variable will not get 0 every time we unmounte because it is inside the Counter2 
// and also we have included the useEffect setinterval function in the Counter2 because we won't be able to give the setCount in the Counter so we won't be ablt to update the count 
import {useState, useEffect} from "react";

//conditional rendering is used when we want to show the different content on the basis of the condition
// example 
 export default function Counter2(){
   const [counterVisible, setCounterVisible] = useState(true);
   const [count, setCount] = useState(0);

   useEffect(function () {
     setInterval(function () {
       // making the counter visible and invisible after every 3 second
       setCounterVisible((c) => !c); //
     }, 3000);
   }, []);

   // useEffect is used when we need only one time runing of any part of the programme
   // if we have not used the useEffect then the setInterval will set new clock every second and we will re render every clock every second and that go on increasing
   useEffect(function () {
    let clock =  setInterval(function () {
       // we are wanting the count every second increasing
       setCount((count) => count + 1); // we could have done this setCount(count+1)(means not giving the function as argument)(but here we are giving the function as the parameter )  but when we will use the [](dependency array) in the useEffect hook here it is empty
     }, 1000);

   }, []);

   return <div>{counterVisible ? <Counter count={count} /> : null}</div>;
 }

export function Counter({ count }) {

    // const [count, setCount] = useState(0);


    return(
        <div>
            <h1 id="text">{count}</h1>
        </div>
    )
}
    

// DEPENCENCY ARRAY  -> An array of values that the effect depends on. If any of these values change, the effect will be re-run.
// it first clean up if we have any clean up function and then it will run the effect function again and this will keep on happening until the component is unmounted