import faker from 'faker';

const products = [];

for(let i = 0; i< 3; i++) {
    const product = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        adjective: faker.commerce.productAdjective()
    }

    products.push(product);
}