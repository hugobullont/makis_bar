const mongoose = require('mongoose');

const DrinkSchema = mongoose.Schema({
    name: String,
    stock: Number
});

module.exports = mongoose.model('Drink', DrinkSchema);