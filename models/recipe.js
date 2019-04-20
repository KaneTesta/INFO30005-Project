var mongoose = require('mongoose');
var recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Recipe needs a title"],
    trim: true,
    minlength: 1
  },
  ingredients: [{
    quantity: Number,
    unit: String,
    ingredient: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}
  }],
  method: {
    type: [String],
    required: [true, "Recipe needs a method"]
  },
  author: String,
  serves: Number
});
mongoose.model('recipes', recipeSchema, 'recipes');
