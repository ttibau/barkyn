import faker from 'faker';


export default (req, res) => {
    const products = [];
    
    for(let i = 0; i< 4; i++) {
        let adjectivesArr = [];
        for(let j = 0; j < 4; j++) {
            adjectivesArr.push(faker.commerce.productAdjective())
        }
        const product = {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            adjectives: adjectivesArr 
        }
    
        products.push(product);
    }
    res.status(200).send(products)
}