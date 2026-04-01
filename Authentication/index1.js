const express = require("express");     // express returns you a function 
const { message } = require("statuses");

const app = express();  
app.use(express.json()) // it will parse the post body    

const user = [];

// it return the random token 
function generateStrongPasskey(length = 20) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let passkey = "";

  for (let i = 0; i < length; i++) {
    passkey += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return passkey;
}

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
        const token = generateStrongPasskey();
        foundUser.token = token;
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
  const token = req.header.token; // or req.header.authorization   (it's just name gives whatever you want)
  let foundUser = user.find((u) => u.token === token); // searching the user of this particular token

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



