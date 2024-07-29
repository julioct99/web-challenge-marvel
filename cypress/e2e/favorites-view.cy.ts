describe('Favorites view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://gateway.marvel.com/v1/public/characters?*', {
      fixture: 'characters.json',
    }).as('getCharacters')

    cy.visit('http://localhost:5173/')
    cy.wait('@getCharacters')

    cy.getBySel('favorite-characters-counter').should('have.text', '0')
    cy.getBySel('favorite-button').first().click()
    cy.getBySel('favorite-button').eq(1).click()
    cy.getBySel('favorite-characters-counter').should('have.text', '2').click()
  })

  it('shows the list of favorite characters', () => {
    cy.getBySel('character-list').should('exist').children().should('have.length', 2)
  })

  it('can search for favorite characters', () => {
    cy.getBySel('searchbar').type('bomb')
    cy.getBySel('searchbar').type('{enter}')
    cy.getBySel('character-list').should('exist').children().should('have.length', 1)
    cy.getBySel('character-name').should('contain', 'Bomb')
  })

  it('can remove a character from favorites', () => {
    cy.getBySel('favorite-button').first().click()
    cy.getBySel('favorite-characters-counter').should('have.text', '1')
  })
})
