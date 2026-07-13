const express = require("express");

const app =express();

app.get("/sum", (req, res) =>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:(a+b)
    });

    /*
    OR 
    res.send(`sum is ${a+b}`)
    */

});

app.get("/sub",(req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        sub : a-b
    });
});

app.get("/mult", (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

     res.json({
        mult : a*b
     });
});

app.get("div",(req,res)=>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

     res.json({
        div: a/b
     });
});


app.listen(3000);


/*
2. Route Parameters (req.params)

These are part of the URL path itself.

Example:

app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.send((a + b).toString());
});

URL:

http://localhost:3000/sum/10/20

*/
