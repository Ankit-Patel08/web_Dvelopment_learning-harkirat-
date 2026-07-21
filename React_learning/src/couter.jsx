
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

     return () =>{     // clean up function is used to clean up the interval when the component is unmounted
        clearInterval(clock);  // this will clear the interval when we unmount the component
     }

   }, []);  // here this all is due to the dependency array is empty 

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