const mongoose = require('mongoose');
const { dbConnectionString } = require('./config');

const connectDb = () => {
    mongoose.connect(dbConnectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log('mongodb is connected...');
    });
}

module.exports = connectDb;
