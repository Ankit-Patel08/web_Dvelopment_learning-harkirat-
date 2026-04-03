// function createUserRoutes(app){    // we would have done this if we had used not the best way mentioned in the index.js 
                                      // we are not exporting the function anymore we are exporting the object

// app.post("/user/login", function(req, res){
     
// })


// app.post("/user/Signup", function(req, res){
     
// })

// app.get("/user/purchased", function(req, res){
     
// })
// }

// const express = require("express");
// const Router = express.Router;
  //            OR 
const {Router} = require("express");

const userRouter = Router();

userRouter.post("/login", function (req, res) {    // now we can use the userRouter instead of app and we don't have the access of the app instance

});

//  no need of this user before the Signup, or any routes because we have given this in the   // app.use("/user", userRouter);
userRouter.post("/Signup", function (req, res) {
 
});

userRouter.get("/purchased", function (req, res) {

});

module.exports  = userRouter