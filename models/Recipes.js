const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const recipeSchema = new Schema({
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    directions: { type: String, required: true },
    img:{type: String},
    video:{type: String},
    Likes:{ type: Number},
   

}, { timestamps: true });

//  Create Model from our Schema
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export Fruit Model
module.exports = Recipe;
