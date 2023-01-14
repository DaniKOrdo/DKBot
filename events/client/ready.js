const mongoose = require('mongoose');
const config = require('../../config/config.json');

module.exports = (client) => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(config.mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => console.log(`MongoDB connected with ${client.user.tag}`.green.brightCyan));
    } catch (e) {
        console.log(`MongoDB error: ${e}`.red.brightCyan);
    }
}