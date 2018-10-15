const mongoose = require('mongoose');

const ComplementSchema = mongoose.Schema({
    name: String,
    stock: Number
});

module.exports = mongoose.model('Complement', ComplementSchema);