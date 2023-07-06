/// <reference types="cypress" />

describe('Testes para o exercicio', () => {

    it('Deve entrar na página de contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('header h1').should('have.text', 'Agenda de  contatos')
    })
    it('Deve cadastrar contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[type="text"]').type('Juliana')
        cy.get('input[type="email"]').type('jujjesofmths@gmai.com')
        cy.get('input[type="tel"]').type('44 44444 4444')
        cy.get('button[type="submit"]').click()
        

        cy.get('[type="text"]').should('have.text', '')
    })
    it('Deve remover contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
    it('Deve editar', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('body > .sc-iAEyYk > :nth-child(2)')
        cy.get('input[type="text"]').type('Matheus')
        cy.get('input[type="email"]').type('mthfofjujjes@gmai.com')
        cy.get('input[type="tel"]').type('55 55555 5555')
    })
})