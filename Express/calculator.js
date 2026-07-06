const express = require("express");

const app = express();

app.get("/add", function(req,res){                   
    let a =Number(req.query.a);
    let b =Number(req.query.b);

    res.json({
        ans:a+b
    })
})

/*
             OR 
 app.get("/add/:firstArgu/:secondArgu",function(req, res){             // now we can give the querry pareameter like this   http://localhost//:sum/10/20
    const a = parseInt(req.params.firstArgu);          // here is slight change in taking the input from the querry para 
    const a = parseInt(req.params.secondArgu);
 })
*/

app.get("/sub", function(req, res){
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    res.json({
        ans:a-b
    })
})


app.get("/mul", function (req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);

  res.json({
    ans: a * b,
  });
});

app.get("/div", function (req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);

  res.json({
    ans: a / b,
  });
});




app.listen(3000);   // it is countinously listening at the port number 3000