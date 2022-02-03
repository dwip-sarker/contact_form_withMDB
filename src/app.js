// dependencies
const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('./db/conn');
const Contactschema = require('./models/contact_schema');

// initialization
const app = express();
const port = process.env.PORT || 3000;
const templatesPath = path.join(__dirname, '../templates/views/');
const partials = path.join(__dirname, '../templates/partials/');

// static folder
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup view engine
app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partials);

// router
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', async (req, res) => {
    const contactdata = new Contactschema({
        fullName: req.body.fullname,
        email: req.body.email,
        contactNo: req.body.contactno,
        message: req.body.message,
    });
    await contactdata.save();
    res.status(201).render('index');
});

// start the server
app.listen(port, () => {
    console.log(`server listing on port ${port}`);
});
