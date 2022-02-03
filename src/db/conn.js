// dependencies
const mongoose = require('mongoose');

// connecting with database
mongoose
    .connect('mongodb://localhost:27017/contact_table')
    .then(() => {
        console.log('Database connection successfull');
    })
    .catch((error) => {
        console.log(`no connections${error}`);
    });
