const faker = require('faker');

let user = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.random.number()
}

export default user;

