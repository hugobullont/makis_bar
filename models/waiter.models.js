const mongoose = require('mongoose');

const WaiterSchema = mongoose.Schema({
    name: String,
    urlImage: String,
    active: Boolean
});

module.exports = mongoose.model('Waiter', WaiterSchema);