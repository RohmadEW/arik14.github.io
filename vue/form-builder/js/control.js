var form = new Vue({
	el: '#app',

	data: {
		/** List of Input Type **/
		options: [
			{name: 'Input', type: 'text'},
			{name: 'Dropdown', type: 'dropdown'},
			{name: 'Radio Boxes', type: 'radio'},
			{name: 'Checkboxes', type: 'checkbox'},
			{name: 'Paragraph', type: 'textarea'}
		],

		/** Main List of Input **/
		listInput: [
			{
				type: 'text',
				label: 'Example Label',
				value: ''
			}
		]	
	},

	methods: {
		/** Cloning Current Input **/
		buttonClone: function(index){
			var cloneType = form.listInput[index].type;
			var cloneLabel = form.listInput[index].label;
			var cloneValue = form.listInput[index].value.slice();
			var cloneList = {
				type: cloneType,
				label: cloneLabel,
				value: cloneValue
			};
			form.listInput.splice(index+1, 0, cloneList);
		},

		/** Removing Current Input **/
		buttonRemove: function(index){
			var length = form.listInput.length;
			if(length > 1){
				form.listInput.splice(index, 1);
			} else {
				alert('Cannot remove this input');
			}
		},

		/** Adding New Input **/
		buttonAdd: function(index){
			var newList = {
				type: 'text',
				label: 'Example Label',
				value: ''
			}
			form.listInput.splice(index+1, 0, newList);
		},

		/** Adding New Item for Dropdown, Radioboxes, and Checkboxes **/
		addItem: function(indexInput, indexItem){
			var length = form.listInput[indexInput].value.length;
			var currentItem = form.listInput[indexInput].value[0];
			var newItem = currentItem.replace(1, length+1);
			form.listInput[indexInput].value.push(newItem);
		},

		/** Removing Current Item for Dropdown, Radioboxes, and Checkboxes **/
		removeItem: function(indexInput, indexItem){
			var length = form.listInput[indexInput].value.length;
			if (length > 1){
				form.listInput[indexInput].value.splice(indexItem, 1);
			} else {
				alert('Cannot remove this item');
			}
		},

		checkSelection: function(index, inputType){
			switch(inputType){
				case 'text':
					form.listInput[index].value = '';
					break;
				case 'dropdown':
					form.listInput[index].value = ['Option 1'];
					break;
				case 'radio':
					form.listInput[index].value = ['Radio 1'];
					break;
				case 'checkbox':
					form.listInput[index].value = ['Checkbox 1'];
					break;
				case 'textarea':
					form.listInput[index].value = '';
			}
		}
	}
})