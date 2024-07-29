describe('Character detail view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://gateway.marvel.com/v1/public/characters?*', {
      fixture: 'characters.json',
    }).as('getCharacters')

    cy.intercept('GET', 'https://gateway.marvel.com/v1/public/characters/*?*', {
      fixture: 'character-detail.json',
    }).as('getCharacter')

    cy.intercept('GET', 'https://gateway.marvel.com/v1/public/characters/*/comics?*', {
      fixture: 'comics.json',
    }).as('getComics')

    cy.visit('http://localhost:5173/')
    cy.wait('@getCharacters')

    cy.getBySel('character-card').first().click()
    cy.wait('@getCharacter')
    cy.wait('@getComics')
  })

  it('shows the character details', () => {
    cy.getBySel('character-detail').should('exist')
    cy.getBySel('character-name').should('have.text', 'Adam Warlock')
    cy.getBySel('character-description').should(
      'contains.text',
      'Adam Warlock is an artificially created human who was born in a cocoon'
    )
    cy.getBySel('favorite-button').should('exist')
  })

  it('shows the comics', () => {
    cy.getBySel('comic-list').should('exist')
    cy.getBySel('comic-card').should('have.length', 20)
    cy.getBySel('comic-title').first().should('contain.text', 'Warlock: Rebirth')
    cy.getBySel('comic-year').first().should('contain.text', '2023')
    cy.getBySel('comic-carousel').scrollTo('right')
  })

  it('can add the character to favorites', () => {
    cy.getBySel('favorite-characters-counter').should('have.text', '0')
    cy.getBySel('favorite-button').click()
    cy.getBySel('favorite-characters-counter').should('have.text', '1')
    cy.getBySel('favorite-button').click()
    cy.getBySel('favorite-characters-counter').should('have.text', '0')
  })
})
