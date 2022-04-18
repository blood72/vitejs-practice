<template>
  <h1>To-Do Lists</h1>
  <table>
    <tr>
      <td></td>
      <td>
        <input v-model="newDescription" placeholder="Add a description...">
      </td>
      <td>
        <button @click="addTodo">Add Todo</button>
      </td>
    </tr>

    <Todo v-for="todo in todos" :data="todo" v-on:delete-todo="deleteTodo(todo.id)"></Todo>
  </table>
</template>

<script>
import { ref, reactive, watch } from 'vue'
import Todo from '@/components/Todo.vue'

function loadTodos() {
  const localTodos = localStorage.getItem('_todo_lists')

  if (localTodos === null) {
    return [];
  }
  else {
    console.log(`loadTodos loaded: ${localTodos}`)
    return JSON.parse(localTodos)
  }
}

function saveTodos(todos) {
  localStorage.setItem('_todo_lists', JSON.stringify(todos))
}

export default {
  name: "TodoList",
  setup() {
    const newDescription = ref('');
    const todos = reactive(loadTodos());

    function addTodo() {
      todos.push({
        id: Date.now(),
        done: false,
        description: newDescription.value,
      })
      newDescription.value = ''
    }

    function deleteTodo(id) {
      console.log(`Delete todo with id: ${id}`)
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
          todos.splice(i, 1)
          break
        }
      }
    }

    watch(todos, (newTodos, prevTodos) => {
      saveTodos(newTodos)
    })

    return {
      todos,
      newDescription,
      addTodo,
      deleteTodo,
    }
  },
  components: {
    Todo,
  }
}
</script>
