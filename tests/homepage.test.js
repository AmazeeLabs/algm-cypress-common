describe('Homepage validation', () => {
  const envSettings = Cypress.env('homepage');

  before(() => {
    cy.skipOn(envSettings.enabled !== true);
    cy.visit('/');
  });

  it('it has only one h1 tag', () => {
    cy.checkIfSkipped('homepage.one_h1').then(status => cy.skipOn(status));
    cy.get('h1').should('have.length', 1).and('not.be.empty');
  });

  it('has skip to main content link', () => {
    cy.checkIfSkipped('homepage.main_content_link').then(status => cy.skipOn(status));
    cy.contains('Skip to main content').should('have.class', 'visually-hidden');
  });

  it('has cookie banner displayed', () => {
    cy.checkIfSkipped('homepage.cookie_banner').then(status => cy.skipOn(status));
    const cookieSettings = envSettings['cookie'];
    cy.get(cookieSettings['class']).should('be.visible');
  });
});
