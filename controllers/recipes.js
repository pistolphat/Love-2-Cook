const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");

// GET - homepage displaying all recipes
router.get("/", (req, res) => {
  Recipe.find({}).then(recipe => {
    res.render("index", { recipe });
  });
});

//Clicked to add new item - take to new page
router.get("/new", (req, res) => {
  res.render("recipes/new");
});

//Create new recipe based on model - from homepage
router.post("/", (req, res) => {
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  }).then(recipe => {
    res.redirect("/");
  });
});

//Click to show and redirect to /:id
router.get("/:id", (req, res) => {
  Recipe.findOne({ _id: req.params.id }).then(recipe => {
    res.render("recipes/edit", recipe);
  });
});

// //update specific item by ID
router.put("/:id", (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body).then(recipe => {
    res.redirect("/");
  });
});

// delete
// router.delete("recipes/:id", (req, res) => {
//   Recipe.findOneAndRemove({ _id: req.params.id }).then(() => {
//     res.redirect("/");
//   });
// });

module.exports = router;


//send user to specific page to edit item
// router.get("/recipes/:id", (req, res) => {
//   Recipe.findOne({ _id: req.params.id }).then(recipe => {
//     res.render("recipes/edit", recipe);
//   });
// });