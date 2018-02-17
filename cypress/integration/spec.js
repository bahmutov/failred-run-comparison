/// <reference types="Cypress" />
const addTodo = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
// extra cy.wait commands for demo purposes
it('adds todos', () => {
  cy.visit('http://localhost:1234')
  cy.wait(500, {log: false})
  addTodo('first todo')
  cy.wait(500, {log: false})
  addTodo('second todo')
  cy.wait(500, {log: false})
  cy.get('.todo-list li').should('have.length', 4)
})
afterEach(() => {
  cy.wait(2000, {log: false}) // for demo purposes
})
