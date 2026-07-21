import { useEffect, useState } from "react";

function App(){
    const [Post, setPost] = useState({});

   async function getPost(){
        const response  = await fetch("URL");
        const json = await response.json();

        setPost(json);
    }

    useEffect( () =>{            // here 
      //  fetch("url")      // but we can't make the first function async in the useEffect so we have to make another function where i can use the Async 
      getPost();             // we have given the content from the URL to the post variable 
    }, []);

    return <div>
        {Post.Anything}
    </div>

}



//    OR 

//we can create another hook for this 


import { useEffect, useState } from "react";

function App() {
    const posts = useGetPost();

  return <div>{Posts.Anything}</div>;
}


function useGetPost(){    // custom hook  (for the hook file that's extension can be ".js" or ".jsx" )

     const [Post, setPost] = useState({});

     async function getPost() {
       const response = await fetch("URL");
       const json = await response.json();

       setPost(json);
     }

     useEffect(() => {
       // here
       //  fetch("url")     
       getPost(); 
     }, []);

     return {Post};
}







// we have built in HOOK( useFetch(URL) ) which will recieve URL as argument and give the output of that URL 
     // Users.jsx
useEffect(() => {
    fetch("https://api.example.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
}, []);


// Products.jsx
useEffect(() => {
    fetch("https://api.example.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
}, []);

 // HERE why to write the same logic many times instead we create a HOOK and can use this HOOK with any URL
     

   import { useState, useEffect } from "react";

function useFetch(url) {

    const [data, setData] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(result => setData(result));

    }, [url]);   // URL as dependency because if URL changes then we want to fetch the data again from that new URL

    return data;
}


function Users() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>{users && users.map((user) => <p key={user.id}>{user.name}</p>)}</div>
  );
}




//  CREATING THE useFetch HOOK 

function useFetch(url) {   // this function also provide the loading so that we can show something when data is being load from the URL 
    const [finalData, setFinalData] = useState({});
    const [Loading , setLoading] = useState(true);

   async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(finalData);
        setLoading(false);
    }

    useEffect( ()=>{
        getDetails();
    },[url])

    return ({    // NOW whenever we will use this HOOK then we will have 2 variables one for the data and one for the leading 
        finalData, Loading
    })
}


