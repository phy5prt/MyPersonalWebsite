//later should store all the images on the database so i can change them easier and then just pupulate the image folder have them in an array of their path and themselves

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose=require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static("public"));

console.log("test");
/* for ajax !!!!!!!!!!!!!!!!!!! */

// Routes
// API Routes (require from routes folder and pass in Express app)
//require('./routes/api-routes')(app);
// HTML Routes (require from routes folder and pass in Express app)
//require('./routes/html-routes')(app);

/* for ajax end !!!!!!!!!!!!!! */








mongoose.connect('mongodb://localhost:27017/projectCardsDB',{useNewUrlParser:true});

//later use a second collection so do not repeatedly store image paths, image paths ....
const projectCardSchema = new mongoose.Schema({
  projectName:{type:String, required:[true,"missing projectName"]},
  overallProjectRating:{type:Number, required:[true,"missing overall project rating"]},
  projectDescription:{type:String,required:[true,"missing projectDescription"]},
  projectImagePath:{type:String, required:[true, "missing projectImagePath"]},

  technologiesArray:[
    {technologyName:{type:String, required:[true, "technologiesArray element missing technology name"]},
      technologyImagePath:{type:String, required:[true, "technologiesArray element missing technology image path"]},
      technologyExampleRating:{type:Number, required:[true, "technologiesArray element missing technology image path"]}
    }
  ],
  linksArray:[
    {linkName:{type:String, required:[true, "linksArray element missing link name"]},
      linkImagePath:{type:String, required:[true, "linksArray element missing link image path"]},
      linkHyperlink:{type:String, required:[true, "linksArray element missing link url"]}
    }
  ]


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
      projectImagePath:req.body.projectImagePath,
      technologiesArray:req.body.technologiesArray,
      linksArray:req.body.linksArray


    })
    newProjectCard.save(function(err){
      if(!err){res.send("successfully add a new projectCard");
    }else{res.send(err);}});

  })
    .delete(function(req,res){
        ProjectCard.deleteMany(function(err){if(!err){res.send("SuccessfulDelete");}else{res.send(err);}})

          //res.send(" 'I'm sorry Dave I can't do that' - Hal");
        });

//requests single cards !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

/*
app.route("/carousel/:technologyName")
.get(function(req,res){
    ProjectCard.find({technologyName:req.params.technologyName},function(err,projectCards){
      if(projectCards){
        res.send(projectCards);
      }else{
        res.send("no project cards found matching that technology");}
});
*/
/*
ProjectCard.aggregate([
  {$unwind:"$technologiesArray"},
  {$match:{"technologiesArray.technologyName":"req.query.techButton"}},
{$sort : { "technologyName.technologyExampleRating" : -1 }}
])
*/

app.route("/carousel") /*make a version that takes projectName and it just takes one project displays it and all others are randomly sorted around*/
            .get(function(req, res){      console.log("carousel received body data: " + JSON.stringify(req.body) + " and query data: " +JSON.stringify( req.query));

/* this is more complicated that i expected will need to read docs and also maybe good excuse stackover flow question
desired behaviour is to only show project cards which have the specifiec technology. And to order the projects by the rating of that technology for them
            ProjectCard.aggregate([
                {$unwind:"$technologiesArray"},
                {$match:{"technologiesArray.technologyName":req.query.techButton}},
              {$sort : { "technologyName.technologyExampleRating" : -1 }},
             {$project:({})} dont want data limited by matches
            ]).exec(function(err,aggregate){console.log(aggregate);});
*/


/* this currently provides the json as the website page when i click a technology  */
              ProjectCard
              .find( {technologiesArray:{$elemMatch : {technologyName:req.query.techButton}}})
      .sort({"technologiesArray.technologyExampleRating":1})
              .exec(function(err,projectCardsWithSpecificTechnology){
                if(projectCardsWithSpecificTechnology){

                  res.send(projectCardsWithSpecificTechnology);
                }else{
                  res.send("no projectCardsWithSpecificTechnology found");}
              });


            });

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
              projectImagePath:req.body.projectImagePath,
              technologiesArray:req.body.technologiesArray,
              linksArray:req.body.linksArray
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


app.route("/")
.get(function(req,res){

ProjectCard.find()
.sort({overallProjectRating:-1})
.limit(3)
.exec(function(err,best3Cards){
  res.render("myWebsite", {
    page3FirstBestCard:best3Cards[0]
    ,page3SecondBestCard:best3Cards[1]
    ,page3ThirdBestCard:best3Cards[2]
  //  ,page3FourthBestCard:best4Cards[3]


  });
    });


//.toArray((err,projectCards)=>{ this needs cursor
//  if(err)return console.log(err);
//  res.send(projectCards);
//});



//.sort({overallProjectRating,-1}).limit(4); //find first 4 cards

//res.render("myWebsite"
//,{



})
.post(function(req,res){
  var post = "posted";
  res.render("myWebsite",{myData:post});
});


app.listen(3000, function(){console.log("EJS Server started on port 3000");});
