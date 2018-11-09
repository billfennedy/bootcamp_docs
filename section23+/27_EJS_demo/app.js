const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hero = ["AA","BB","CC","DD"];  //database part, use this for a while

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static("public"));
  app.set("view engine","ejs");

  app.get("/", function(req,res){
    res.render("home");
  });

  app.get("/hero", function(req, res){
    res.render("hero", {hero: hero});
  })

  app.post("/addhero", function(req, res){
    var newHero = req.body.newHero
    hero.push(newHero);
    res.redirect("/hero")
  })

  app.get("/posts", function(req,res){
    var posts = [
      {title: "Aa", author: "A1"},
      {title: "Bb", author: "B1"},
      {title: "Cc", author: "C1"},
    ]
      res.render("posts", {posts: posts});
  })

  app.get("/herospam/:heroName", function(req,res){
    var heroName = req.params.heroName;
    res.render("spam", {spam: heroName});
  });

  app.listen(3000, function(req, res){
    console.log("Server is listening....")
  })
