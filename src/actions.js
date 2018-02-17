// common pure actions for different components AND tests

export const toggle = ({ id, completed }) => state => {
  // poor man's find and toggle todo, can be really shortened
  // with Ramda or other functional libraries.

  // Luckily such pure functions are
  // SUPER SIMPLE to test and refactor
  // as much as you want
  return {
    todos: state.todos.map(
      t => (t.id === id ? Object.assign({}, t, { completed }) : t)
    )
  }
}

export const add = (text) => state => {
  const newTodo = {
    id: state.todos.length + 1,
    title: text,
    completed: false
  }
  return {
    todos: state.todos.concat(newTodo)
  }
}

// loads items from localStorage
export const getTodos = (loaded) => {
  const s = localStorage.get('todos')
  if (s) {
    const todos = JSON.parse(s)
    if (loaded) {
      loaded(list)
    }
  }
}
