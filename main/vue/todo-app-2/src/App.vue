<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue.js Todo App</h1>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <todo-list v-bind:todos="todos"></todo-list>
          <create-todo v-on:create-todo="createTodo"></create-todo>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>

import sweetalert from 'sweetalert';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
	name: 'app',
	components: {
	   TodoList,
     CreateTodo
	},
	data() {
		return {
		  todos: [{
			   title: 'Todo A',
			   project: 'Project A',
			   done: false,
         finishdate: 'Unset'
      }, {
          title: 'Todo B',
          project: 'Project B',
          done: true,
          finishdate: 'Unset'
      }, {
          title: 'Todo C',
          project: 'Project C',
          done: false,
          finishdate: 'Unset'
      }, {
          title: 'Todo D',
          project: 'Project D',
          done: false,
          finishdate: 'Unset'
      }],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'Todo created!', 'success');
    }
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.modal-header-color {
  background-color: lightblue;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
</style>
