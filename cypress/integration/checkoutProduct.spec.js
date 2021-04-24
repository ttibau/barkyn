describe('checkout', () => {
    it('should select an product and go to checkout page', () => {
        cy.visit('localhost:3000');
        cy.contains('Choose Product').click();
    })

    it('should fill shipping form correctly', () => {
        cy.get('input[name="name"]').clear().type('Thiago Tibau');
        cy.get('input[name="email"]').clear().type('tibaus@gmail.com');
        cy.get('input[name="address"]').clear().type('rua Marques de Abrantes');
        cy.get('input[name="postal_code"]').clear().type('22230-061');
        cy.get('input[name="country"]').clear().type('Brazil');
        cy.get('input[name="phone"]').clear().type('21998700934');
        cy.get('form').contains('Next').click();
        cy.contains('Payment Details');
    })

    it('should fill form with wrong credit card', () => {
        cy.get('input[name="creditCardNumber"]').clear().type(' 4603 5291 0522')
        cy.get('form').contains('Next').click();
        cy.contains('Invalid credit card number') 
    })

    it('should fill correctly payment form', () => {
        cy.get('input[name="creditCardNumber"]').clear().type('5248 4603 5291 0522')
        cy.get('input[name="creditCardCVV"]').clear().type('777')
        cy.get('input[name="creditCardHolder"]').clear().type('THIAGO TIBAU')
        cy.get('form').contains('Next').click()
    })
})