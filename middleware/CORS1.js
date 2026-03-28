// const express = require("express");

// const app = express();

// app.use(express.json());

// app.get("/sum", function(req, res){
//     const a = Number(req.body.a);
//     const b = Number(req.body.b);

//     res.json({
//         answer: a+b
//     })
// })

// app.listen(3000);


const express = require("express");
const cors = requre("cors");                 // this is how we add the cors

const app = express();

app.use(express.json());
app.use(cors())                         // allow all origins

// app.use(cors({
//     domains: ["http://google.com", "http://employee.google.com"]     // only allow from this domains 
// }))



app.get("/", function(req, res){                                   // due to this the frontEnd and backend go to the same domain then there is no use of CORS
    res.sendFile(__dirname + "frontEnd file(we are giving here");
})


app.get("/sum", function (req, res) {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  res.json({
    answer: a + b,
  });
});

app.listen(3000);
