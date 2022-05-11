const { User } = require('../models');

const userData = [{
        username: 'Adam',
        password: 'mada'

    },
    {
        username: 'Monica',
        password: 'acinom'
    },
    {
        username: 'Lili',
        password: 'ilil'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;