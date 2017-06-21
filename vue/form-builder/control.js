var form = new Vue({
	el: '#app',

	data: {
		selected: 'text',
		/** List of Input Type **/
		options: [
			{text: 'Input', type: 'text'},
			{text: 'Dropdown', type: 'dropdown'},
			{text: 'Radio Boxes', type: 'radio'},
			{text: 'Checkboxes', type: 'checkbox'},
			{text: 'Paragraph', type: 'textarea'}
		],
		/** Main List of Input**/
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
		clone: function(listInputToClone, listInputTypeToClone){
			var temp = form.listInput.indexOf(listInputToClone);
			var tempType = form.listInput[temp].type;
			var tempLabel = form.listInput[temp].label;
			var tempValue = form.listInput[temp].value;
			form.listInput.splice(temp+1, 0,
			{
				type: tempType,
				label: tempLabel,
				value: tempValue
			})
		},
		/** Removing Current Input **/
		remove: function(listInputToRemove){
			var temp = form.listInput.indexOf(listInputToRemove);
			var length = form.listInput.length;
			if(length > 1){
				form.listInput.splice(temp,1);
			} else {
				alert('Cannot remove this input');
			}
		},
		/** Adding New Input **/
		addNew: function(listInputToAdd){
			var temp = form.listInput.indexOf(listInputToAdd);
			form.listInput.splice(temp+1, 0,
			{
				type: 'text',
				label: 'Example Label',
				value: ''
			})
		},

		/** Adding New Dropdown Item **/
		addDropdown: function(currentItemInput){
			var temp = form.listInput.indexOf(currentItemInput);
			var length = form.listInput[temp].value.length;
			var text = 'Option'.concat(' ', length+1);

			form.listInput[temp].value.push(text);
		},
		/** Removing Current Dropdown Item **/
		removeDropdown: function(currentListInput, itemInputToRemove){
			var temp = form.listInput.indexOf(currentListInput);
			var i = form.listInput[temp].value.indexOf(itemInputToRemove);
			var length = form.listInput[temp].value.length;
			if(length > 1){
				form.listInput[temp].value.splice(i,1);
			} else {
				alert('Cannot remove this dropdown item')
			}
		},
		/** Adding New Radio Button Items **/
		addRadioButton: function(currentItemInput){
			var temp = form.listInput.indexOf(currentItemInput);
			var length = form.listInput[temp].value.length;
			var text = 'Radio'.concat(' ',length+1);

			form.listInput[temp].value.push(text);
			
		},
		/** Removing Current Radio Button Items **/
		removeRadioButton: function(currentListInput, itemInputToRemove){
			var temp = form.listInput.indexOf(currentListInput);
			var i = form.listInput[temp].value.indexOf(itemInputToRemove);
			var length = form.listInput[temp].value.length;
			if(length > 1){
				form.listInput[temp].value.splice(i,1);
			} else {
				alert('Cannot remove this radio box item');
			}
		},
		/** Adding New Checkbox Items **/
		addCheckbox: function(currentItemInput){
			var temp = form.listInput.indexOf(currentItemInput);
			var length = form.listInput[temp].value.length;
			var text = 'Checkbox'.concat(' ',length+1);
			
			form.listInput[temp].value.push(text);
		},
		/** Removing Current Checkbox Items **/
		removeCheckbox: function(currentListInput,itemInputToRemove){
			var temp = form.listInput.indexOf(currentListInput);
			var i = form.listInput[temp].value.indexOf(itemInputToRemove);
			var length = form.listInput[temp].value.length;
			if(length > 1){
				form.listInput[temp].value.splice(i,1);
			} else {
				alert('Cannot remove this checkbox item');
			}
		},

		checkSelection: function(itemSelected){
			temp = form.listInput.indexOf(itemSelected);
			switch(itemSelected.type){
				case 'text':
					form.listInput[temp].value = '';
					break;
				case 'dropdown':
					form.listInput[temp].value = ['Option 1'];
					break;
				case 'radio':
					form.listInput[temp].value = ['Radio 1'];
					break;
				case 'checkbox':
					form.listInput[temp].value = ['Checkbox 1'];
					break;
				case 'textarea':
					form.listInput[temp].value = '';
					
			}
			console.log(form.listInput);
		}
	}
})
