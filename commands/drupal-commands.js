Cypress.Commands.add("drupalLogin", (user, password) => {
  return cy.request({
    method: "POST",
    url: "/user/login",
    form: true,
    body: {
      name: user,
      pass: password,
      form_id: "user_login_form",
    }
  });
});

Cypress.Commands.add("drupalLogout", () => {
  return cy.request("/user/logout");
});

Cypress.Commands.add("drupalDrushCommand", (command) => {
  var cmd = Cypress.env("drupalDrushCmdLine");
  if (cmd === null) {
    cmd = "drush %command";
  }
  if (typeof command === "string") {
    command = [command];
  }
  const execCmd = cmd.replace("%command", command.join(" "));
  return cy.exec(execCmd);
});

Cypress.Commands.add("checkIfSkipped", (id) => {
  let found = false;
  const skippedIds = Cypress.env('skipped_tests');
  if (Array.isArray(skippedIds)) {
    found = skippedIds.includes(id);
  }
  return found;
});