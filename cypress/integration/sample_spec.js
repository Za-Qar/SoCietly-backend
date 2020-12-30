describe('Falcon 5ive API', () => {
    it('Visits JSON', () => {
        cy.request('https://falcon5ives.herokuapp.com/users')
    })
    it('returns a JSON data', () => {
        cy.request('https://falcon5ives.herokuapp.com/users')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json');
    });
});

// describe('Users API', () => {
//     beforeEach(() => cy.request('https://falcon5ives.herokuapp.com/users').as('users'));

//     it('should return the correct status code', () => {
//         cy.get('@users').its('status').should('have.length', 200);
//     })
//     it('should return the correct number of users', () => {
//         cy.get('@users').its('body').should('have.length', 10);
//     })
// })