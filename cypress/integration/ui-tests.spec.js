describe('UI Tests for Quotes App', () => {
  it('loads 5 random quotes', () => {
    cy.visit('http://localhost:8080')
    cy.get('.ant-card').should(cards => {
      expect(cards).to.have.length(5)
    })
  })

  it('Refresh random quotes bubtton works', () => {
    cy.visit('http://localhost:8080')
    cy.get('.quote-1').then(quote => {
      const originalQuote = quote.text()

      cy.get('.random-quote-btn')
        .click()

      cy.get('.quote-1').then(quote => {
        const newQuote = quote.text()
        expect(newQuote).not.to.equal(originalQuote)
      })
    })

  })

  it('Lists Authors', () => {
    cy.visit('http://localhost:8080')
    cy.get('.ant-menu-submenu')
      .contains('Authors')
      .click()

    cy.get('.author-menu-item')
      .contains('Steve Jobs')
  })
})