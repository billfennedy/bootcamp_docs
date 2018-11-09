var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

  //Schema Setup
  var playgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String
  })

  var Playground = mongoose.model("Playground", playgroundSchema);

  // Playground.create(
  //   {
  //     name: "Pudge", image:"https://www.dotabuff.com/assets/heroes/pudge-1cf5d17618283039e7922f62c6b7b276e5924c1fdeb387143d07f4b1af66d8fa.jpg",
  //     desc: "Big and Tanky"
  //   }, function(err, playground){ // to verify if there is an error or not
  //     if(err){
  //         console.log(err);
  //     } else {
  //         console.log("Newly Created Playground hero: ");
  //         console.log(playground);
  //     }
  //   })

  mongoose.connect("mongodb://localhost/bill_camp")
  app.use(bodyParser.urlencoded({extended: true}));
  app.set("view engine", "ejs");

  app.get("/", function(req, res){
    res.render("landing")
  });

  // INDEX - Shows all heroes
  app.get("/playgrounds", function(req, res){
    // Get all heroes from DB
    Playground.find({}, function(err, allPlaygrounds){
    if(err){
      console.log(err);
    } else {
      res.render("index", {playgrounds: allPlaygrounds})
    }
    //res.render("playgrounds", {heroes: heroes})
  })
});

  // CREATE  - add new Hero to Database
  app.post("/playgrounds", function(req, res){
    //get data from form and add to playgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    var newHero = {name: name, image: image, desc: desc};
    Playground.create(newHero, function(err, newlyCreated){
      if(err){
        console.log(err);
      } else {
        //redirect to playgrounds page
        res.redirect("/playgrounds");
      }
    })
  });

  // NEW - shows Form to create new Hero and then redirect to the index page
  app.get("/playgrounds/new", function(req, res){
    res.render("new")
  });

  // SHOW - shows more info about one hero
  app.get("/playgrounds/:id", function(req, res){
    // find the hero with the provided ID:
    Playground.findById(req.params.id, function(err, foundHero){
      if(err){
        console.log(err);
      } else {
        // render show template with that hero
        res.render("show", {hero: foundHero})
      }
    })
    // render show template with that hero

  })

  app.listen(3000, function(req, res){
    console.log("Server is listening....")
  });
