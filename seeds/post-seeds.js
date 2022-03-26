const { Post } = require('../models');

const postData = [
    {
        title: "Post 1",
        post_content: `post 1 content`,
        user_id: 3
    },
    {
        title: "Post 2",
        post_content: `Post 2 content`,
        user_id: 1
    },
    {
        title: "Post 3",
        post_content: `Post 3 content`,
        user_id: 2

    },
    {
        title: "Post 4",
        post_content:  `Post 4 content`,
        user_id: 5
    },
    {
        title: "Post 5",
        post_content: `Post 5 content`,
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts; 