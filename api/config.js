const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPathPhotos: path.join(rootPath, 'public/uploads/photos'),
    uploadPathUsers: path.join(rootPath, 'public/uploads/users'),
    dbURL: 'mongodb://localhost/gallery',
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true
    },
    facebook: {
        appId: '653815268389768',
        appSecret: 'a98f8616664620a0adce7401bfbcce8a'
    }
};

