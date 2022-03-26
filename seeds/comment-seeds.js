const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Great work"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Really great work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Thanks everyone"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "One of the absolute wonders of the world.  Great sentiment to live by"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Bravo!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Good work!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 