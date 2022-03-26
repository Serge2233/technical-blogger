const { User } = require('../models');

const userData = [
    {
        username: "buzz_aldrin",
        twitter: "buzz_aldrin_twitter",
        github: "buzz_aldrin_github",
        email: "buzz_aldrin@gmail.com",
        password: "password1"
    },
    {
        username: "troy_bolton",
        twitter: "troy_bolton_twitter",
        github: "troy_bolton_github",
        email: "troy_bolton@gmail.com",
        password: "password2"
    },
    {
        username: "jeremy_white",
        twitter: "jeremy_white_twitter",
        github: "jeremy_white_github",
        email: "jeremy_white@gmail.com",
        password: "password3"
    },
    {
        username: "claire_leo",
        twitter: "claire_leo_twitter",
        github: "claire_leo_github",
        email: "claire_leo@gmail.com",
        password: "password4"
    },
    {
        username: "john_doe",
        twitter: "john_doe_twitter",
        github: "john_doe_github",
        email: "john_doe@gmail.com",
        password: "password5"
    },
    {
        username: "paul_wilson",
        twitter: "paul_wilson_twitter",
        github: "paul_wilson_github",
        email: "paul_wilson@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 