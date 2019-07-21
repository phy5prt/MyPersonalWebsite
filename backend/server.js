/*jshint esversion: 6 */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));


var path = require("path");


app.use(express.static(path.resolve(__dirname + "/../frontEnd")));


app.get("/", function(req, res) {



  res.sendFile(path.resolve(__dirname + "/../frontEnd/index.html")); //should i not put index in the static folder it makes this line redundant

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});


///////!!!!!!!!!!!!!!!!!!!! move to database.js when know how to run setInterval(function () {

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projectCardsDB', {
  useNewUrlParser: true
});

const projectCardSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "missing projectNAme"]
  },
  overallProjectRating: {
    type: Number,
    required: [true, "missing overall project rating"]
  },
  projectDescription: {
    type: String,
    required: [true, "missing projectDescription"]
  },
  projectImage: {
    type: String,
    required: [true, "missing projectImage"]
  }
  //technologies and their ratings list eg git 5 unity 1 csharp 3
  //hyperlinks list eg youtube linke phil.playlist ...
});
//in future will have a mySite/admin with oauth and it will have the same caracell but a new button delete button and be edditable
//this will be the interface for the project card management
const ProjectCard = mongoose.model("projectCard", projectCardSchema);
const projectCard = new ProjectCard({
  projectName: "Example Project Name",
  overallProjectRating: 8,
  projectDescription: "This is an example project. This is its description. To make it i used mongoose and javascript the cards later will be edittable through an admin area giving crud option to it",
  projectImage: "frontEnd/Images/exampleProjectNameProjectImage.jpg"

});

//projectCard.save();
//  ProjectCard.findOne({},function(err,projectCards){module.exports={projectCards:projectCards}});
