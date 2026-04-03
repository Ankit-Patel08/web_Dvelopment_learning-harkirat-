const express = require("express");
const app = express();
app.use(express.json());

const {userRouter} = require("./routes/user");   // this is how we import the routes 
const {courseRouter} = require("./routes/course");

// createUserRoutes(app);   // not the best way  
// createCourseRoutes(app);

// better than above calling because we are able to tell from which routes we are calling it 

app.use("/user", userRouter);    // this is how we use the routes
app.use("/course", courseRouter);  // all the routes that start with /user will be handled by the courseRouter



app.listen(3000); 