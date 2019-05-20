const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// List Model
const List = require('../../models/List');

// @route   GET api/lists
// @desc    GET All Lists
// @access  Public
router.get('/', (req, res) => {
    List.find()
        .sort({name: 1})
        .then(lists => res.json(lists))
});

// @route   POST api/lists
// @desc    Create An List
// @access  Private
router.post('/', auth, (req, res) => {
    const newList = new List({
        name: req.body.name,
        songs: req.body.songs
    });
    newList.save().then(list => res.json(list));
});

// @route   DELETE api/lists/:id
// @desc    Delete An List
// @access  Private
router.delete('/:id', auth, (req, res) => {
    List.findById(req.params.id)
        .then(list => list.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// @route   POST api/lists/songs/post
// @desc    Add new Songs to List
// @access  Private
router.post('/songs/post', auth, (req, res) => {
    List.updateOne({ _id: req.body.id }, { $push: { songs: { $each: req.body.songs } } })
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
});

// @route   DELETE api/lists/songs/:id/:song
// @desc    Delete A Song
// @access  Private
router.delete('/songs/:id/:song', auth, (req, res) => {
    List.updateOne({ _id: req.params.id }, { $pull: { songs: req.params.song } })
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: req.params.song}));
});

module.exports = router;