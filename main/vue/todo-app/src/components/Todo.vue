<template>
	<div class="container">
		<div class="panel panel-primary" v-show="!isEditing">
			<div class="panel-heading">
				{{ todo.title }}
			</div>
			<div class="panel-body">
				{{ todo.project }}
			</div>
			<div class="panel-footer">
				<h4><span class="label label-success btn btn-success" v-show="!isEditing && todo.done" disabled>Completed</span></h4>
				<h4><span class="label label-info" v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)">Pending</span></h4>
				<button class="btn btn-default" v-on:click="showForm">Edit</button>
				<button class="btn btn-default" v-on:click="deleteTodo(todo)">Delete</button>
			</div>
		</div>		

		<div class="panel panel-success" v-show="isEditing">
			<div class="panel-body">
				<form>
					<div class="form-group">
						<label for="formTitle">Title</label>
						<input class="form-control" id="formTitle" v-model="todo.title">
					</div>
					<div class="form-group">
						<label for="formProject">Project</label>
						<input class="form-control" id="formProject" v-model="todo.project">
					</div>
					<button class="btn btn-default" v-on:click="hideForm">Close</button>
				</form>
			</div>
		</div>

	</div>
			
</template>

<script>
export default {
	props: ['todo'],
	data() {
		return {
			isEditing: false
		}
	},
	methods: {
		showForm() {
			this.isEditing = true;
		},
		hideForm() {
			this.isEditing = false;
		},
		deleteTodo(todo) {
			this.$emit('delete-todo', todo);
		},
		completeTodo(todo) {
			this.$emit('complete-todo', todo);
		}
	}
}
</script>