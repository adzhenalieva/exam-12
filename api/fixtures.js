const mongoose = require('mongoose');
const nanoid  = require('nanoid');
const config = require('./config');


const User = require('./models/User');
const Photo = require('./models/Photo');


const run = async () => {
    await mongoose.connect(config.dbURL, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }
    const users = await User.create(
        {username: 'leo', password: '123', token: nanoid(), displayName: 'Leo', avatar: 'leo.jpeg'},
        {username: 'miki', password: '123', token: nanoid(), displayName: 'Miki', avatar: 'leo.jpeg'},
    );

    await Photo.create(
        {title: 'Desert', image: 'desert.jpg', user: users[0]},
        {title: 'Paris', image: 'paris.jpg', user: users[0]},
        {title: 'Ocean', image: 'ocean.jpg', user: users[1]},
        {title: 'Garden', image: 'garden.jpg', user: users[1]}
    );


    await connection.close();
};


run().catch(error => {
    console.log('Something went wrong', error);
});