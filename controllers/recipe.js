const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes.js');






// Index
router.get('/', (req, res) => {
    // Use Recipe model to get all Recipes
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
        res.redirect('/fblog');
    });
});




// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        // render the Show route and pass it the foundRecipe
        res.render('Show', {
            recipe: foundRecipe
        });
    });
});



// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
        res.redirect('/fblog');
    });
});

// search
router.post('/search/', (req, res) => {
    // Find the specific document
    const data = req.body.name
    Recipe.find({"name" : {$regex : `.*${data}.*`, $options: 'si' }}, (error, foundRecipe) => {
        // render the Show route and pass it the foundRecipe
        console.log
        console.log(data)
        console.log(foundRecipe)
        res.render('Search', {
            recipes: foundRecipe,
            element: req.body.name

        });
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
        res.redirect('/fblog');
    });
});

/// export router 
module.exports= router;