const mongose = require('mongoose');

const serverSchema = new mongose.Schema({
    guildID: String,
    prefix: String,
});

module.exports = mongose.model('Server', serverSchema);