import '../node_modules/todomvc-common/base.css'
import '../node_modules/todomvc-app-css/index.css'

import { h, app } from 'hyperapp'
// import { TodoList } from './todo-list'
import {AddAndList} from './add-and-list'
import { toggle, add } from './actions'

console.log('starting todo app')
const state = {
  todos: [
    {
      id: 1,
      title: 'Write passing test',
      completed: true
    },
    {
      id: 2,
      title: 'Test it using Cypress',
      completed: false
    }
  ]
}
const actions = { toggle, add }
const view = (state, actions) =>
  h(AddAndList, {
    todos: state.todos,
    toggle: actions.toggle,
    add: actions.add
  })

app(state, actions, view, document.getElementById('app'))
