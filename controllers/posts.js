const Posts = require('../model/posts');
const handleResponse = require('../service/handleResponse');
const posts = {
  async getPosts(req, res) {
    const allPosts = await Posts.find();
    handleResponse(200, res, allPosts);
  },
  async createdPosts(req, res) {
    try {
      const { body } = req;
      if (body.content) {
        const newPosts = await Posts.create({
          name: body.name,
          tags: body.tags,
          type: body.type,
          image: body.image,
          createAt: body.createAt,
          content: body.content,
          likes: body.likes,
          comments: body.comments,
        });
        handleResponse(200, res, newPosts);
      } else {
        handleResponse(400, res, null, 'Content 未填寫');
      }
    } catch (error) {
      handleResponse(400, res, null, error.message);
    }
  },
  async deleteAllPosts(req, res) {
    const newPosts = await Posts.deleteMany({});
    handleResponse(200, res, newPosts);
  },
  async deletePosts(req, res) {
    try {
      const id = req.params.id;
      const newPosts = await Posts.findByIdAndDelete(id);
      if (newPosts !== null) {
        handleResponse(200, res, newPosts);
      } else {
        handleResponse(400, res, null, '查無此 ID');
      }
    } catch (error) {
      handleResponse(400, res, null, error.message);
    }
  },
  async updatePosts(req, res) {
    try {
      const id = req.params.id;
      const { body } = req;
      if (JSON.stringify(body) !== '{}') {
        const newPosts = await Posts.findByIdAndUpdate(id, body);
        handleResponse(200, res, newPosts);
      } else {
        handleResponse(400, res, null, '欄位沒有填寫正確');
      }
    } catch (error) {
      handleResponse(400, res, null, '欄位沒有填寫正確或沒有此 ID');
    }
  }
};

module.exports = posts;
