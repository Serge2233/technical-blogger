const User = require('./User')
const Post = require('./Post')
const Likes = require('./Likes')

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

User.belongsToMany(Post, {
    through: Likes,
    as: 'liked_posts',
    foreignKey: 'post_id'
})

Likes.belongsTo(User, {
    foreignKey: 'user_id'
})

Likes.belongsTo(Post, {
    foreignKey: 'post_id'
})

User.hasMany(Likes, {
    foreignKey: 'user_id'
})

Post.hasMany(Likes, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Likes} 