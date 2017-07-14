<template>
	<div class="">
		<div class="panel panel-primary" v-show="!isEditing">
			<div class="panel-heading">
				{{ todo.title }}
			</div>
			<div class="panel-body">
				{{ todo.project }}
				<p>Finish date: {{ todo.finishdate }}</p>
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
					<div class="form-group">
						<label>Finish Date</label>
						<datepicker :format="format" v-model="todo.finishdate"></datepicker>
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
	import DatePicker from 'vuejs-datepicker';

	export default {
		props: ['todo'],
		data() {
			return {
				isEditing: false,

				format: 'MMMM yyyy'
			};
		},
		components: {
			'datepicker': DatePicker
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
