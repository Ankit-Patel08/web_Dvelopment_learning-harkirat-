const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res,next) {
                                                // this is a middleware function that will check if the age of the person is more than 14 or not
  const age = Number(req.query.age);                        // so this is how we can use the middleware function in our code and we can use it in multiple routes as well
  
  if (age >= 14) {
    next();                   // if the age is more than 14 then we will call the next function that will execute the next middleware function or the route handler function
  } else {
    res.json({
      msg: "sorry you are not eligible for this ride",
    });
  }
}

// app.use(isOldEnoughMiddleware);   // we can also use the middleware function globally for all the routes like this and then we don't have to use it in each route separately  after this line the middleware function will be executed for all the routes that are defined after this line and we can also use it before this line as well but it will not be executed for the routes that are defined before this line

app.get("/ride1", isOldEnoughMiddleware,function(req, res){         // we can use the middleware function in our route like this and we can use it in multiple routes as well
    res.json({
        msg:"You have succesfully riden the ride 1"
    });
});

 
app.get("/ride2" ,isOldEnoughMiddleware, function(req,res){
    res.json({
        msg:"you have succefully riden the ride 2"
    })
})


      

      // we can also use the middleware function in our route like this and we can use it in multiple routes as well
      // here the middlwware will be appkied to the second only not to the first one because we have used the middleware function after the first route and before the second route so it will be applied to the second route only and not to the first one and if we want to apply it to both the routes then we can use it globally like this app.use(isOldEnoughMiddleware); and then it will be applied to all the routes that are defined after this line and we can also use it before this line as well but it will not be executed for the routes that are defined before this line
// app.get("/ride1", handler);    

// app.use(isOldEnoughMiddleware);

// app.get("/ride2", handler);




app.listen(3000);   





