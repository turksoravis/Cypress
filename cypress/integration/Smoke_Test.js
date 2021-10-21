describe('Smoke Test for Personal Accident Insurance',() =>{

    it('should visit website rabbitcare',() =>{
        cy.visit('https://staging-finance.rabbitinternet.com/en/product/health-insurance/questions', {timeout: 3000})
        cy.url().should('include', 'health-insurance/questions')
        cy.log('Enter Website')

        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
        cy.log('Clear Cookies and Local Storage')
    })

    it('should select insurance plan',() =>{
        cy.contains('Personal Accident')
        .should('be.visible')
        .click()

        cy.contains('Medical expenses')
        .should('be.visible')
        .click()

        cy.log('selected insurance plan')
    })

    it('should input Personal Info',() =>{
        cy.get('[name="customer_nationality"]')
        .should('be.visible')
        .select('Thailand')

        cy.get('[name="customer_phone"]')
        .should('be.visible')
        .clear()
        .type('0999999999 {enter}', {delay: 150})

        cy.get('[name="customer_first_name"]')
        .should('be.visible')
        .clear()
        .type('Mario', {delay: 150})

        cy.get('[name="customer_last_name"]')
        .should('be.visible')
        .clear()
        .type('Turnel {enter}', {delay: 150})

        cy.get('[name="customer_email"]')
        .should('be.visible')
        .clear()
        .type('mariot@mail.com {enter}', {delay: 150})

        cy.contains('Male')
        .should('be.visible')
        .click()

        cy.get('[name="customer_dob"]')
        .should('be.visible')
        .clear()
        .type('21101991 {enter}', {delay: 150})

        cy.log('input all personal info')
    })

    it('should give consent and click show quotes button',() =>{
        cy.contains('Consent')
        .should('be.visible')
        .click()

        cy.get('button').contains('Show Quotes')
        .should('be.visible')
        .click()

        cy.log('give consent and click show quotes')
    })
})