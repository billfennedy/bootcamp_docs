var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cat_app")

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
})

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
  name: "Mr Norris",
  age: 10,
  temperament: "Evil"
})

george.save(function(err,cat){
  if(err){
    console.log("Something went error!");
  } else {
    console.log("Saved!");
    console.log(cat);
  }
})
