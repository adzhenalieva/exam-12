const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const nanoid = require('nanoid');
const Photo = require('../models/Photo');

const auth = require('../middleware/auth');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPathPhotos);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();


router.get('/', (req, res) => {
    let criteria = {};
    if (req.query.user) {
        criteria = {user: req.query.user}
    }

    Photo.find(criteria).populate({
        path: 'user',
        select: {displayName: 'displayName', _id: '_id'}
    })
        .then(result => {
            if (result) return res.send(result);
            res.sendStatus(404)
        })
        .catch(error => res.status(500).send(error));

});


router.get('/:id', (req, res) => {
    Photo.findById(req.params.id)
        .then(result => {
            if (result) return res.send(result);
            res.sendStatus(404)
        })
        .catch(() => res.sendStatus(500));
});


router.post('/', auth, upload.single('image'), async (req, res) => {
let image;
if(req.file){
    image = req.file.filename
} else{
    image = null;
}
    const photo = await new Photo({
        user: req.user._id,
        image,
        title: req.body.title
    });

    photo.save()
        .then(result => res.send(result))
        .catch(error => res.status(400).send(error));
});


router.delete('/:id', auth, async (req, res) => {
    const photo = await Photo.findById(req.params.id);
    if (photo.user.equals(req.user._id)) {
        Photo.deleteOne({_id: req.params.id}).then(
            result => res.send(result)
        )
    } else {
        res.sendStatus(403)
    }


});


module.exports = router;