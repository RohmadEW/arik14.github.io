<template>
	<div>
		<p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
		<p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
		<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo"></todo>

	</div>
</template>

<script type = "text/javascript">

import sweetalert from 'sweetalert';
import Todo from './Todo';

export default {
	props: ['todos'],
	components: {
		Todo,
	},
	methods: {
		deleteTodo(todo) {
			sweetalert({
				title: 'Are you sure?',
				text: 'This Todo will be permanently deleted!',
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#dd6b55',
				confirmButtonText: 'Yes, delete it',
				closeOnConfirm: false
			},
			() => {
				const todoIndex = this.todos.indexOf(todo);
				this.todos.splice(todoIndex, 1);
				sweetalert('Deleted!', 'Your Todo has been deleted.', 'success');
			});
		},
		completeTodo(todo){
			const todoIndex = this.todos.indexOf(todo);
			this.todos[todoIndex].done = true;
			sweetalert('Success!', 'Todo completed', 'success');
		}
	}
};
</script>
<style scoped>
p.task {
	text-align: center;
}
</style>
