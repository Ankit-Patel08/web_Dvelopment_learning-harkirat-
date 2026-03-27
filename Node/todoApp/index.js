const express = require("express");   // Importing the Express library to create a web server
const app = express();               // Creating an instance of the Express application
const port = 3000;            // Defining the port number on which the server will listen

app.get("/", (req, res) => {        // Defining a route for the root URL ("/") that sends a "Hello World!" response when accessed
  res.send("Hello World!");
});

app.post("/", function(req, res) {
    res.send("hello world from the post endpoint")
})

app.get("/greet",function(req,res){  // Defining a route for the "/greet" URL that sends a personalized greeting message when accessed
    res.send("hello Ankit")
})

app.listen(port, () => {                        // Starting the server and making it listen on the defined port. The callback function is executed once the server is up and running, logging a message to the console.
  console.log(`Example app listening on port ${port}`);
});
