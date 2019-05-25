const mongoose = require('mongoose');
const nanoid  = require('nanoid');
const config = require('./config');


const User = require('./models/User');


const run = async () => {
    await mongoose.connect(config.dbURL, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }
    const users = await User.create(
        {username: 'leo', password: '123', token: nanoid(), displayName: 'Leo', avatar: 'leo.jpeg'}

    );


    await connection.close();
};


run().catch(error => {
    console.log('Something went wrong', error);
});