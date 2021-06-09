describe('Homepage validation', () => {
  const envSettings = Cypress.env('homepage');

  before(() => {
    cy.skipOn(envSettings.enabled !== true);
    cy.visit('/');
  });

  it('it has only one h1 tag', () => {
    cy.get('h1').should('have.length', 1).and('not.be.empty');
  });

  it('has skip to main content link', () => {
    cy.contains('Skip to main content').should('have.class', 'visually-hidden');
  });

  it('it has cookie banner', () => {
    const cookieSettings = envSettings['cookie'];
    cy.get(cookieSettings['class']).should('be.visible');
  });
});
