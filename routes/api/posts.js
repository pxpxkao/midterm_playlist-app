const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Post Model
const Post = require('../../models/Post');

// @route   GET api/posts
// @desc    GET All Posts
// @access  Public
router.get('/', (req, res) => {
    Post.find()
        .sort({title: 1})
        .then(posts => res.json(posts))
});

// @route   POST api/posts
// @desc    Create A Post
// @access  Private
router.post('/', auth, (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        lyrics: req.body.lyrics
    });
    newPost.save().then(post => res.json(post));
});

// @route   DELETE api/posts/:id
// @desc    Delete A Post
// @access  Private
router.delete('/:id', auth, (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;