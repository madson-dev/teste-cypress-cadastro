Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
   // failing the test
return false
})

describe('Usuario', () => {
    it('Deve Acessar a Página de Formulário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/', {timeout: 30000})
        cy.xpath('//*[@id="index-banner"]/div/div[3]/a').click()
        cy.xpath('/html/body/div[2]/div[1]/ul/li[1]/a').click()
        cy.xpath('/html/body/div[2]/div[1]/ul/li[1]/div/ul/li[1]/a').click()
    
    });

    it('Deve Criar um Novo Cadastro', () => {
        cy.xpath('//*[@id="user_lastname"]').should('be.visible').type('Klinger')
        cy.xpath('//*[@id="user_name"]').should('be.visible').type('Felipe')
        cy.xpath('//*[@id="user_email"]').should('be.visible').type('felipe.novaes@yahoo.com.br')
        cy.xpath('//*[@id="user_address"]').should('be.visible').type('Rua Marilene Vieira de Assis, Nº1')
        cy.xpath('//*[@id="user_university"]').should('be.visible').type('Unigranrio')
        cy.xpath('//*[@id="user_profile"]').should('be.visible').type('Enfermeiro')
        cy.xpath('//*[@id="user_gender"]').should('be.visible').type('Masculino')
        cy.xpath('//*[@id="user_age"]').should('be.visible').type(30)
        cy.xpath('//*[@id="new_user"]/div[5]/div/div').click()

    })
})