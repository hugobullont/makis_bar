const mongoose = require('mongoose');

const MakiSchema = mongoose.Schema({
    name: String,
    stock: Number
});

module.exports = mongoose.model('Maki', MakiSchema);