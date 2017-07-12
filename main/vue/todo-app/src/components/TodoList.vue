<template>
	<div class="container">
		<p>Complete Tasks : {{todos.filter(todo => {return todo.done === true}).length}} </p>
		<p>Pending Task : {{todos.filter(todo => {return todo.done === false}).length}} </p>
		
		<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo"></todo>
		
	</div>
</template>

<script>
import sweetalert from 'sweetalert';
import Todo from './Todo';

export default {
	props: ['todos'],
	components: {
		Todo
	},
	methods: {
		deleteTodo(todo) {
			sweetalert({
				title: 'Are you sure?',
				text: 'This Todo will be permanently deleted!',
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, delete it!',
				closeOnConfirm: true
			},
			() => {
				const todoIndex = this.todos.indexOf(todo);
				this.todos.splice(todoIndex, 1);
			});
		},
		completeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos[todoIndex].done = true;
			sweetalert('Success!', 'Todo completed!', 'Success');
		}
	}
}
</script>

<style>

</style>