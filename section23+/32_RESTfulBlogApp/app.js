var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

  mongoose.connect("mongodb://localhost/restful_blog_app");
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ useNewUrlParser: true}));

  // Mongoose - MODEL CONFIG
  var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
  })

  var Blog = mongoose.model("Blog", blogSchema);

  Blog.create({
    title: "Test Blog",
    image: "https://www.google.co.id/imgres?imgurl=https%3A%2F%2Fwww.acsp.org%2Fresource%2Fresmgr%2Fimages%2FBlog.jpg&imgrefurl=https%3A%2F%2Fwww.acsp.org%2Fmembers%2Fblogs.asp&docid=KH6JEOGfSMkJOM&tbnid=iG4I5KsTCPAiaM%3A&vet=10ahUKEwjLoojjycbeAhVEro8KHbrxDLQQMwhwKAUwBQ..i&w=1000&h=401&bih=789&biw=1440&q=blog%20images&ved=0ahUKEwjLoojjycbeAhVEro8KHbrxDLQQMwhwKAUwBQ&iact=mrc&uact=8",
    body: "First Blog POST"
  })


  //title
  //image
  //body
  //created

  app.listen(3000, function(req, res){
    console.log("server is listening");
  })
