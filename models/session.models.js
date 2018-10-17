const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema({
    sessionShortId: String,
    numberOfPeople: Number,
    numberOfComplements: Number,
    currentlyWithOrder: Boolean,
    tableName: String,
    waiterId: String
});

module.exports = mongoose.model('Session', SessionSchema);