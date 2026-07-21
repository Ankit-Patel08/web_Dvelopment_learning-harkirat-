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




