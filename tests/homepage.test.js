describe('Homepage validation', () => {
  const envSettings = Cypress.env('homepage');

  before(() => {
    cy.checkIfSkipped('homepage').then(status => cy.skipOn(status));
    cy.visit('/');
  });

  it('has only one h1 tag', () => {
    cy.checkIfSkipped('homepage.one_h1').then(status => cy.skipOn(status));
    cy.get('h1').should('have.length', 1).and('not.be.empty');
  });

  it('has skip to main content link', () => {
    cy.checkIfSkipped('homepage.main_content_link').then(status => cy.skipOn(status));
    cy.contains('Skip to main content').should('have.class', 'visually-hidden');
  });

  it('has cookie banner displayed', () => {
    cy.checkIfSkipped('homepage.cookie_banner').then(status => cy.skipOn(status));
    cy.get(envSettings['cookie.class']).should('be.visible');
  });

  it('checks all links in menu are valid', () => {
    cy.checkIfSkipped('homepage.check_all_menu_links').then(status => cy.skipOn(status));
    cy.get(envSettings['menu-link.class']).each(page => {
      cy.request(page.prop('href'));
    })
  });

});
