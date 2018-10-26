var humanData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
  // API GET Requests
  // ---------------------------------------------------------------------------
  
  app.get("/api/friends",function(req,res){
    res.json(humanData);
  });


  // API POST Requests

  app.post("/api/friends",function(req,res){
    var human = req.body;
    // console.log("human: ",human);
    humanData.push(human);
    res.json(true);
  });

  app.get("/api/match/:match",function(req,res){
    var human = req.params.match;
    console.log("human: ",human);
    humanData.match(human);
    res.json(humanData.match(human));
  })

};
