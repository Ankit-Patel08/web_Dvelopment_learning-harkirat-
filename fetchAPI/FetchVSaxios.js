//          // fetch VS axios

const { response } = require("express");

// function main(){
//      fetch("https://github.com/Ankit-Patel08")
//      .then( async (response) => {
//         const json = await response.json();
//         console.log(json.todos.length);
//      })
// }
// OR
// async function main() {
//     const response = await fetch("https://github.com/Ankit-Patel08");
//     const json = await response.json();
//     console.log(json.todos.length);
// }
// main();

const axios = require("axios");

// async function main() {
//   const response = await axios.get("https://github.com/Ankit-Patel08");
// //   const json = await response.json();                   // no need to transfer the data into the json because axios take care of it
//   console.log(response.data.todos.length);
// }

async function main() { 
  const response = await fetch("https://github.com/Ankit-Patel08", {       // this is how we give the post request to fetch 
    method: "Post",
    body:{
        username:"ankit",
        password:"123"
    },
    headers:{
        "Authorization":"ankit 123"
    }
  });
  const datafound = await response.text();         // if the output is text not json  then we are manully converting it to the text;
  console.log(json.todos.length);                // so we have to know the data type 
}

async function main() {
    const response = await axios.post("https://github.com/Ankit-Patel08", {            // this is how we pass the header and body in the axios
        username:"ankit",                                                         // when the method is get then we can't give the body 
        password:"12345"
    }, {
        headers:{
            "authorization" : "ankit 123"
        }
    });
    console.log(response.data);                                                  // here no need to know the data type which we are getting
}



// SEE SOME SYNTAX THERE ARE THE WAYS TO WRITE THE SYNTAX  

main();