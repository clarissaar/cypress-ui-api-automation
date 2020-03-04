const faker = require('faker');

let user = function () {
    user = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.random.number()
    }
};

module.exports = {
    user
};

