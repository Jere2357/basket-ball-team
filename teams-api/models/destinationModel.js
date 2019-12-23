const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TeamsSchema = new Schema({
    name: {
        type: String
    },
    logo: {
        type: String
    },
    department: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('teams', TeamsSchema);
