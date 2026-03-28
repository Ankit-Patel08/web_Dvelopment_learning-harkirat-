const express = require("express");

const app = express();

app.get("/add", function(req,res){                   
    let a =Number(req.query.a);
    let b =Number(req.query.b);

    res.json({
        ans:a+b
    })
})

app.listen(3000);