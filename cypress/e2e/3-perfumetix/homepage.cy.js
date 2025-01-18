   describe('Perfumetix Homepage', () => {
     beforeEach(() => {
       cy.visit('https://perfumetix.com/');
     });

     it('should load the homepage with the correct title', () => {
       cy.title().should('include', 'Perfumatix');
     });

     it('should display the header and logo', () => {
       cy.get('header').should('be.visible');
       cy.get('header img').should('have.attr', 'alt', 'perfumatix');
     });

     it('should display featured categories or products', () => {
       cy.get('.todo-list li').should('have.length', 3)
       cy.get('.featured-products').should('be.visible');
       cy.get('.featured-products .product-item').its('length').should('be.gt', 0);
     });
   });