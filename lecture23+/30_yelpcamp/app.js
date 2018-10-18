var express = require('express');
var app = express();
var bodyParser = require('body-parser');

    var heroes = [
      {name: "Meepo", image:"https://www.dotabuff.com/assets/heroes/meepo-3f8cf3125f7c595c11c6c597be1c38059d41f937216d323b825b293d04db67d5.jpg"},
      {name: "Pudge", image:"https://www.dotabuff.com/assets/heroes/pudge-1cf5d17618283039e7922f62c6b7b276e5924c1fdeb387143d07f4b1af66d8fa.jpg"},
      {name: "Slark", image:"https://www.dotabuff.com/assets/heroes/slark-6cf17ee2752c11d8f83056e4c5b4d565b6085e91adf79cf0aa63b6b77605cf53.jpg"},
      {name: "Earthshaker", image:"https://www.dotabuff.com/assets/heroes/earthshaker-d0afa7fab16834e45e62e2a8d215cda0ee46746aec73e60435757090f6fb05f3.jpg"}
    ]

  app.use(bodyParser.urlencoded({extended: true}));
  app.set("view engine", "ejs");

  app.get("/", function(req, res){
    res.render("landing")
  })

  app.get("/playgrounds", function(req, res){
    res.render("playgrounds", {heroes: heroes})
  });

  app.post("/playgrounds", function(req, res){
    //get data from form and add to playgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newHero = {name: name, image: image};
    heroes.push(newHero);
    //redirect to playgrounds page
    res.redirect("/playgrounds");
  })

  app.get("/playgrounds/new", function(req, res){
    res.render("new")
  })

  app.listen(3000, function(req, res){
    console.log("Server is listening....")
  })
