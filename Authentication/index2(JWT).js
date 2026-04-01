/*
          TOKEN VS JWT(JSON WEB TOKEN)

    1. The problem with the token is that it is stored(Stateful)
    2. JWT is stateless(it is not stored in the databse or to anywhere)
    Problem -> the problem is that we need to send a request to the databse every time the user wants to 
                hit an authenticated endpoint 
  
    JWTs are a compact and self-conatained way to represent information
    between two parties.They are commonly used for authentication and information exchange in
    web application

   how this JWT help to save one step for approching the DB
     -> when we sign up the use data get stored in the DB 
        now when sign in another time then we gaenerate the token by the use of this JWT(with the given payload(data)) 
          and send into your browser and that token(encoded token) get stored inside your browser then the every time in that login period you 
          hit any enpoint then you don't need to give the password again because the jwt will use(decode) that token and convert it into 
          the information(payload) which user was given at the payload 
         
          (encoding, decoding is different from encryption and dicription)
            in encryption you can't get the decripted value without the key 
            but in incpding and decoding you can get the dicripted data without the use of SECRET_KEY 
              here we are just finding the data but to varify we need the SECRET_KEY

    varification step of JWT 
    ✅    Verification
        Was it created using your secret key?
        Was it modified?
        Is it expired?
*/


const express = require("express");     // express returns you a function 
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomAnkitPatel"      // added this

const app = express();  
app.use(express.json()) // it will parse the post body    

 const user = [];         


app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    user.push({                           // storing in the local varibale 
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
       // here this find will return this users[i];  if it found the elements not true or false  
       if (u.username == username && u.password == password) {
         return true;
       } else {
         return false;
       }
     })

     if(foundUser){
        const token = jwt.sign({             // generating the token
            username: username
        },JWT_SECRET);                  // using our JWT_secret keyword
        // foundUser.token = token;       //now no need to store it in any variable
        res.json({
            token:token
        })
     }else{
        res.status(403).send({
            message:"Invalid username or password"
        })
     }
})


// how to ask for the my data (like me asking for my cource then it should return the user with his data)
app.get("/me", function (req, res) {
  const token = req.header.token;  // ye to token lega hi as before
  const decodedInformation = jwt.verify(token, JWT_SECRET);  //  this is how to get the payload back after decoding 
                                                        // the decoded information will be same as the above which we have given during the sign as above is json object 
     const username = decodedInformation.username;                                                   
  let foundUser = user.find((u) => u.username === username); // searching the user of this particular token

  if (foundUser) {                       // for the password we have to hit the DB becasue we are not storing the password in this Payload 
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



