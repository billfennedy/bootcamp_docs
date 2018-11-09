const exercise = require('express');
var app = exercise();

  app.get("/", function(req, res){
    res.send("Hi there, welcome to exercise 1")
  })

  app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = "";
    if (animal === "pig"){
      sound = "oink";
    } else if (animal === "dog"){
      sound = "woof";
    }
    res.send("The " + animal + " says " + sound)
  })

  app.get("/:message/:times", function(req,res){
    var msg = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(var i = 0; i < times; i++){
      result += msg + " ";
    }
    res.send(result);
  })
  app.get("*", function(req, res){
    res.send("Sorry, page not found.. what are you doing with your life?");
  })

  app.listen(3000, function(){
    console.log("Serving the first app exercise");
  })
