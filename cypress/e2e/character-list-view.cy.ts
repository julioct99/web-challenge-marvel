describe('Character list view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://gateway.marvel.com/v1/public/characters?*', {
      fixture: 'characters.json',
    }).as('getCharacters')

    cy.intercept(
      'GET',
      'https://gateway.marvel.com/v1/public/characters?nameStartsWith*',
      {
        fixture: 'characters-search.json',
      }
    ).as('getCharactersWithSearch')

    cy.visit('http://localhost:5173/')
    cy.wait('@getCharacters')
  })

  it('shows the list of characters', () => {
    cy.getBySel('character-list').should('exist')
    cy.getBySel('character-list').children().should('have.length', 20)
  })

  it('can add a character to favorites', () => {
    cy.getBySel('favorite-characters-counter').should('contain', '0')
    cy.getBySel('favorite-button').first().click()
    cy.getBySel('favorite-characters-counter').should('contain', '1')
    cy.getBySel('favorite-button').first().click()
    cy.getBySel('favorite-characters-counter').should('contain', '0')
  })

  it('can search for characters', () => {
    cy.getBySel('searchbar').type('spider')
    cy.getBySel('searchbar').type('{enter}')
    cy.wait('@getCharactersWithSearch')

    cy.getBySel('character-list').should('exist')
    cy.getBySel('character-list').children().should('have.length', 4)
    cy.getBySel('character-name').should('contain', 'Spider')
  })
})
