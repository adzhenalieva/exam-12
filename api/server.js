const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const users = require('./app/users');
const photos = require('./app/photos');

const app = express();

const port = 8000;
app.use(express.json());
app.use(express.static('public'));
app.use(cors());




mongoose.connect(config.dbURL, config.mongoOptions).then(() => {
    app.use('/users', users);
    app.use('/photos', photos);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    })

});