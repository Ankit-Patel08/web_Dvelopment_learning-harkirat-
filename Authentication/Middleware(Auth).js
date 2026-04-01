
const express = require("express");      
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomAnkitPatel"      

const app = express();  
app.use(express.json()) 

 const user = [];         


app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    user.push({                          
        username : username,
        password:password
    })

    res.json({
        message:"You are signed up"
    })

})

app.post("/sigin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

     const foundUser = user.find(function(u){  
       if (u.username == username && u.password == password) {
         return true;
       } else {
         return false;
       }
     })

     if(foundUser){
        const token = jwt.sign({             
            username: username
        },JWT_SECRET);                
        res.json({
            token:token
        })
     }else{
        res.status(403).send({
            message:"Invalid username or password"
        })
     }
})


function auth(req, res, next) {
  const token = req.header.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    req.username = decodedData.username;   // passing the username to the function
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }
}


app.get("/me",auth, function (req, res) {
  const token = req.header.token;  
  const decodedInformation = jwt.verify(token, JWT_SECRET);   
                                                         
     const username = decodedInformation.username;                                                   
  let foundUser = user.find((u) => u.username === req.username);   // here req.username because we have passed the value of username in the middleware and it is telling about the current user whihc is asking for the me 
 
  if (foundUser) {                        
    res.json({
      username: foundUser.username,
      password: foundUser.password, 
    });
  } else {
    res.json({
      message: "Token invalid",
    });
  }
});

app.listen(3000); 