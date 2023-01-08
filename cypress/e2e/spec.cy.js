it('Reads Cypress injected variable via Cypress.env', () => {
    const token = Cypress.env('TOKEN')
    cy.wrap(token)
      .should('be.a', 'string')
})
it('Cannot read non Cypress injected variable', () => {
    const token = Cypress.env('IMPORTANT_TOKEN')
    cy.wrap(token)
      .should('be.undefined')
})

it('Reads non Cypress injected via task', () => {
    cy.task('getImportantToken')
      .should('be.a', 'string')
})

it('Cannot read Cypress injected variable via task', () => {
    cy.task('getCypressToken')
      .should('be.a','string')
})