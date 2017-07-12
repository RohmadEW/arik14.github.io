<template>
	<div class="">
		<div class="panel panel-primary" v-show="!isEditing">
			<div class="panel-heading">
				{{ todo.title }}
			</div>
			<div class="panel-body">
				{{ todo.project }}
			</div>
			<div class="panel-footer">
				<button class="btn btn-success" v-show="!isEditing && todo.done" disabled>
					Completed
				</button>
				<button class="btn btn-info" v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done">
					Pending
				</button>
				<button class="btn btn-default" v-on:click="showForm">
					Edit
				</button>
				<button class="btn btn-default" v-on:click="deleteTodo(todo)">
					Delete
				</button>
			</div>
		</div>

		//form is visible in editing mode
		<div class="panel panel-primary" v-show="isEditing">
			<div class="panel-heading">
				{{ todo.title }}
			</div>
			<div class="panel-body">
				<form>
					<div class="form-group">
						<label>Title</label>
						<input type="text" class="form-control" v-model="todo.title">
					</div>
					<div class="form-group">
						<label>Project</label>
						<input type="text" class="form-control" v-model="todo.project">
					</div>
					<button class="" v-on:click="hideForm">
						Close
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script type = "text/javascript">
	export default {
		props: ['todo'],
		data() {
			return {
				isEditing: false,
			};
		},
		methods: {
			completeTodo(todo) {
				this.$emit('complete-todo', todo);
			},
			deleteTodo(todo) {
				this.$emit('delete-todo', todo);
			},
			showForm() {
				this.isEditing = true;
			},
			hideForm(e) {
				e.preventDefault();
				this.isEditing = false;
			}
		}
	};
</script>
<style>
</style>
