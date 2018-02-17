import { h } from 'hyperapp'
import { TodoList } from './todo-list'

export const AddItem = ({add}) =>
  h('header', {
    class: 'header'
  }, [
    h('h1', {}, 'todos'),
    h('input', {
      autofocus: 'autofocus',
      autocomplete: 'off',
      placeholder: 'What needs to be done?',
      class: 'new-todo',
      onchange: (e) => {
        e.preventDefault()
        add(e.target.value)
        e.target.value = ''
      }
    }, '')
  ])

export const AddAndList = ({todos, toggle, add}) =>
  h('section', {
    class: 'todoapp'
  }, [
    AddItem({add}),
    h(TodoList, {
      todos,
      toggle
    })
  ])
