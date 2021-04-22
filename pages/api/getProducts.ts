import faker from 'faker';


export default (req, res) => {
    const products = [];
    
    for(let i = 0; i< 4; i++) {
        const product = {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            adjective: faker.commerce.productAdjective()
        }
    
        products.push(product);
    }

    res.status(200).send(products)
}