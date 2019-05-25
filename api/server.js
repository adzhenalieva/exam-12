const express = require('express');
const mongoose = require('mongoose');
const users = require('./app/users');
const cors = require('cors');
const config = require('./config');

const app = express();

const port = 8000;
app.use(express.json());
app.use(express.static('public'));
app.use(cors());




mongoose.connect(config.dbURL, config.mongoOptions).then(() => {
    app.use('/users', users);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    })

});