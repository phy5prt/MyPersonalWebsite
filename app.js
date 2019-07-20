

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose=require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/projectCardsDB',{useNewUrlParser:true});


const projectCardSchema = new mongoose.Schema({
  projectName:{type:String, required:[true,"missing projectNAme"]},
  overallProjectRating:{type:Number, required:[true,"missing overall project rating"]},
  projectDescription:{type:String,required:[true,"missing projectDescription"]},
  projectImage:{type:String, required:[true, "missing projectImage"]}
  //technologies and their ratings list eg git 5 unity 1 csharp 3
  //hyperlinks list eg youtube linke phil.playlist ...
});
//in future will have a mySite/admin with oauth and it will have the same caracell but a new button delete button and be edditable
//this will be the interface for the project card management
const ProjectCard = mongoose.model("projectCard",projectCardSchema);

//requests all cards !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
app.route("/projectCards")
    .get(function(req,res){ProjectCard.find(function(err,projectCards){
    if(!err){
    res.send(projectCards);
    }else{
      res.send(err);
    }})})
    .post(function(req,res){


    const newProjectCard=new ProjectCard({

      projectName:req.body.projectName,
      overallProjectRating:req.body.overallProjectRating,
      projectDescription:req.body.projectDescription,
      projectImage:req.body.projectImage

    })
    newProjectCard.save(function(err){
      if(!err){res.send("successfully add a new projectCard");
    }else{res.send(err);}});

  })
    .delete(function(req,res){
        //  Article.deleteMany(function(err){if(!err){res.send("I'm sorry Dave I can't do that");}else{res.send(err);}}})

          res.send(" 'I'm sorry Dave I can't do that' - Hal");
        })

//requests single cards !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

//need a method to order database maybe not here though
app.route("/projectCards/:projectName")
          .get(function(req,res){
          //  req.params.projectTitle = "Example Project Name";
            ProjectCard.findOne({projectName:req.params.projectName},function(err,projectCard){
              if(projectCard){
                res.send(projectCard);
              }else{
                res.send("no project card found matching that title")}
            });
          })
          .put(function(req,res){ //replaces whole document
            ProjectCard.update(
                 {projectName:req.params.projectName},
              {
              projectName:req.body.projectName,
              overallProjectRating:req.body.overallProjectRating,
              projectDescription:req.body.projectDescription,
              projectImage:req.body.projectImage
            },
            {overwrite:true},
            function(err){if(!err){res.send("put update successful");}else{res.send(err);}}

          );
          })
          .patch(function(req,res){
            ProjectCard.update(
              {projectName:req.params.projectName},
              { $set:req.body},
            function(err){
              if(!err){
                res.send("patch update successful");
              }else{
                res.send(err);}}
            );
          })
          .delete(function(req,res){
             ProjectCard.deleteOne(
                 {projectName:req.params.projectName},
               function(err){if(!err){
                 res.send("successfully deleted");
               }else{res.send(err);}
          })})


app.get("/", function(req,res){




});


app.listen(3000, function(){console.log("EJS Server started on port 3000");});
