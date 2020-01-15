const mongoose = require('mongoose');
var dbConnectionString;
try {
    dbConnectionString = require('./config').dbConnectionString;
} catch(ex) {
    dbConnectionString = process.env.DBCONNECTIONSTRING;
}

const connectDb = () => {
    mongoose.connect(dbConnectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log('mongodb is connected...');
    });
}

module.exports = connectDb;
