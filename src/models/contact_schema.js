// dependencise
const mongoose = require('mongoose');

// schema for contact page
const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    contactNo: {
        type: Number,
        require: true,
        unique: true,
    },
    message: {
        type: String,
        require: true,
    },
});

// now we need  to create a collections
const Contactschema = new mongoose.model('contact_schema', contactSchema);

// export schema
module.exports = Contactschema;
