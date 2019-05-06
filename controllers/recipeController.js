var mongoose = require('mongoose');
var Recipe = mongoose.model('recipe');
var Storage = mongoose.model('storage');

// Find recipes containing one or multiple ingredients
var findRecipeByIngredients = (query, callback) => {
    //Recipe.find({ ingredients: { $in: query } }, function (err, recipes) {
    Recipe
        .byIngredients(query)
        .exec(function (err, recipes) {
        callback({
            error: err,
            result: recipes
        });
    });
};

var findRecipeByID = (req, res, next) => {
    Recipe.findById(req.params.id, function(err, result) {
        if (!err) {
            res.json(result.toJSON());
        }
        else {
            console.log(err);
        }
    })
}

// Insert one recipe
var insertRecipe = (recipe, callback) => {
    var recipe = new Recipe({
        title: recipe.title,
        ingredients: recipe.ingredients,
        method: recipe.method,
        author: recipe.string,
        serves: recipe.serves
    });

    recipe.save((err, newRecipe) => {
        callback({
            error: err,
            result: 'Recipe: ' + newRecipe.title + ' added!'
        });
    });
};

// Find storage information for one ingredient
var findStorageInfo = (req, res) => {
    var ingredientName = new RegExp('^' + req.params.ingredient, 'i');

    Storage.find({ ingredient: { $regex: ingredientName } }, (err, info) => {
        if (!err) {
            res.json(info);
        } else {
            res.sendStatus(404);
        }
    });
};




// Exporting callbacks
module.exports = {
    findRecipeByIngredients,
    findRecipeByID,
    insertRecipe,
    findStorageInfo,
};
