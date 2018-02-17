/// <reference types="Cypress" />
const addTodo = (text) => {
  cy.get('#new-todo').type(`${text}{enter}`)
}
const deleteTodo = (text) => {
  cy.contains('li', text).find('.destroy').click({force: true})
}
it('stores todos in localStorage', () => {
  cy.visit('http://todomvc.com/examples/mithril/#/')
  addTodo('first todo')
  addTodo('second todo')
  cy.get('#todo-list li').should('have.length', 2)
  deleteTodo('first todo')
  cy.reload()
  cy.get('#todo-list li').should('have.length', 2)
})
