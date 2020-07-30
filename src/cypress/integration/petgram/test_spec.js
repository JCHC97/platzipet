/* global describe, it, cy*/

describe('Petgram', function () {
	it('para ver si la app funciona', function() {
		cy.visit('/')
	})

	it('navegar a una categoria y vemos fotos', function() {
		cy.visit('/pet/1')
		cy.get('article')
	})

	it('si podemos navegar por la navbar al home', function() {
		cy.visit('/pet/1')
		cy.get('nav a').first().click()
		cy.url().should('include', '/')
	})

	it('usuario no registrados ven el formulario de registro al is a favs', function() {
		cy.visit('/favs')
		cy.get('form').should('have.length', 2)
	})
})