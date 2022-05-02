var express = require('express');
var router = express.Router();
const postsControllers = require('../controllers/posts');

router.get('/', postsControllers.getPosts);
router.post('/', postsControllers.createdPosts);
router.delete('/', postsControllers.deleteAllPosts);
router.delete('/:id', postsControllers.deletePosts);
router.patch('/:id', postsControllers.updatePosts);

module.exports = router;
