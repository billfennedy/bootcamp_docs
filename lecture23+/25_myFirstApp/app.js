const express = require('express');
var app = express();

// "/" -- Hi User
  app.get("/",function(req, res){
    res.send("hi User!")
  })

// "/bye" -- Gudbye
  app.get("/bye",function(req, res){
    res.send("Gudbye!")
  })
// "/woaow" -- Wuawua
  app.get("/woaow",function(req, res){
    console.log("Wuaw! someone has just made a req to this address");
    res.send("WuaWua!")
  })

// "/*" -- Star << any random route
  app.get("*",function(req, res){
    console.log("just ignore :), from Star Page");
    res.send("Star Page!")
  })

  app.listen(3000, function(){
    console.log("Listening....");
  })
