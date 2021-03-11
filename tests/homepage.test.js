it('loads login page', () => {
  cy.visit('/user/login');
})

it('can login', () => {
  cy.drupalLogin('admin', 'admin123');
})
