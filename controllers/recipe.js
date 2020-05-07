const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes.js');




// add routes
// Index
router.get('/', (req, res) => {
    // Use Fruits model to get all Fruits


    Recipe.find({}, (error, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes
        })
    });

});
// New
router.get('/new', (req, res) => {
    res.render('New');
});

// Create
router.post('/', (req, res) => {

    // Use Model to create Fruit Document
    Recipe.create(req.body, (error, addRecipe) => {
        console.log(addRecipe)
        // Once created - respond to client
        res.redirect('/FBlog');
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        // render the Show route and pass it the foundFruit
        res.render('Show', {
            recipe: foundRecipe
        });
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
        res.redirect('/FBlog');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Recipe.findById(req.params.id, (err, foundRecipe) => {
        // render the edit view and pass it the found Recipe
        res.render('Edit', {
            recipe: foundRecipe
        })
    });
});

// Put
router.put('/:id', (req, res) => {
   

    // Update the Recipe document using our model
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/FBlog');
    });
});

/// export router 
module.exports= router;