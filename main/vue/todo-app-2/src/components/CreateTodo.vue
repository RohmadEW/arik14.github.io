<template>
	<div class="">
		<button class="btn btn-default" data-toggle="modal" data-target="#myModal" v-on:click="openForm" v-show="!isCreating">
			Add
		</button>
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" v-show="isCreating">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header modal-header-color">
						<h4>Edit Form</h4>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Title</label>
								<input class="form-control" v-model="titleText" type="text">
							</div>
							<div class="form-group">
								<label>Project</label>
								<input class="form-control" v-model="projectText" type="text">
							</div>
							<button class="btn btn-default" data-dismiss="modal" v-on:click="sendForm">
								Create
							</button>
							<button class="btn btn-default" data-dismiss="modal" v-on:click="closeForm">
								Cancel
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			titleText: '',
			projectText: '',
			isCreating: false
		}
	},
	methods: {
		openForm() {
			this.isCreating = true;
		},
		closeForm(e) {
			e.preventDefault();
			this.isCreating = false;
		},
		sendForm(e) {
			e.preventDefault();
			if (this.titleText.length > 0 && this.projectText.length > 0) {
				const title = this.titleText;
				const project = this.projectText;
				this.$emit('create-todo', {
					title,
					project,
					done: false
				});
				this.titleText = '';
				this.projectText = '';
				this.isCreating = false;
			}
		}
	}
}
</script>