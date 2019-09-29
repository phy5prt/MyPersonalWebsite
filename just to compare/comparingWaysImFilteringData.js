
/* !!!!!!!!!1 this is how technology buttons request a filtered json page */

app.route("/carousel") /*make a version that takes projectName and it just takes one project displays it and all others are randomly sorted around*/
            .get(function(req, res){

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



  /* this is how a put does it passing a variable  */

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



  /* this is how a put does it passing a variable  */
  
