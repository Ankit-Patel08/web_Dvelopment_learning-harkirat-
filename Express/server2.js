const express = require("express");
const { use } = require("react");
const app = express();

// var user = {
//     name: "john",
//     kidneys : [{
//         healthy: true,
//     }]
// }
// const users = [user];
 

//    OR



const users = [{
    name : "john",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());  // to use the req.bosy 

app.get("/", function(req, res){
    const johnkidney = users[0].kidneys;
     const numberofKidneys = johnkidney.length;
     let numberofHealthyKidney = 0;
     for(let i = 0; i< johnkidney.length; i++){
        if(johnkidney[i].healthy){
            numberofHealthyKidney = numberofHealthyKidney+1;
        }
     }
     const numberofUnhealthykidney = numberofKidneys-numberofHealthyKidney;
     res.json({
        numberofKidneys,
        numberofHealthyKidney,
        numberofUnhealthykidney
     })
})

app.post("/",function(req, res){
  const isHealthy = req.body.isHealthy; // app.use(express.json());  due to this line it is able to receive the req.body
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function (req, res) {
  const newKidneys = [];

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push(users[0].kidneys[i]);
    }
  }

  users[0].kidneys = newKidneys;

  res.json({
    msg: "Unhealthy kidneys removed",
  });
});

app.listen(3000);

