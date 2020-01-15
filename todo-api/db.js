const mongoose = require('mongoose');
var dbConnectionString;
if (require.resolve('./config')) {
    dbConnectionString = require('./config').dbConnectionString;
} else {
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
