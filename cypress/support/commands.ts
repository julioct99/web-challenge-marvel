/// <reference types="cypress" />

Cypress.Commands.add('getBySel', (selector: string, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args)
})

Cypress.Commands.add('getBySelLike', (selector: string, ...args) => {
  return cy.get(`[data-cy*=${selector}]`, ...args)
})
