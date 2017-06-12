var formBuild = angular.module("formBuilder", []);
formBuild.controller('formController', function($scope){
	/** List of Input Type **/
	$scope.listInputType = [
				{name : "Input", type: "text"},
				{name : "Dropdown", type: "dropdown"},
				{name : "Radio Boxes", type: "radio"},
				{name : "Check Boxes", type: "checkbox"},
				{name : "Paragraph", type: "textarea"}
	];
	
	/** Main List of Input**/
	$scope.listInput = [
		{
			type  : 'input',
			label : 'Example Label',
			value : ''
		} 
	];
	
	/** Adding New Input **/
	$scope.addInput = function(listInputToClone){
		var temp = $scope.listInput.indexOf(listInputToClone);
		$scope.listInput.splice(temp+1, 0,
			{
				type  : 'input',
				label : 'Example Label',
				value : ''
			});
	};
	
	/** Cloning Current Input **/
	$scope.cloneInput = function(listInputToClone, listInputTypeToClone){
		var temp = $scope.listInput.indexOf(listInputToClone);
		var tempType = $scope.listInput[temp].type;
		var tempLabel = $scope.listInput[temp].label;
		var tempValue = $scope.listInput[temp].value;

		$scope.listInput.splice(temp+1, 0,
			{
				type  : tempType,
				label : tempLabel,
				value : tempValue
			});
	};

	/** Removing Current Input **/
	$scope.removeInput = function(listInputToRemove){
		var i = $scope.listInput.indexOf(listInputToRemove);
		$scope.listInput.splice(i,1);
	}

	/** Initial value for Dropdown, Radio Button, Checkbox **/
	$scope.tempDropdownValue = ['Option 1'];
	$scope.tempRadioButtonValue = ['Radio 1'];
	$scope.tempCheckboxValue = ['Checkbox 1'];

	$scope.onSelectedInput = function(selectedInput){
		var temp = $scope.listInput.indexOf(selectedInput);
		var tempType = $scope.listInput[temp].type;
		switch(tempType){
			case 'text':
				$scope.listInput[temp].value = '';
				break;
			case 'dropdown':
				var dropdownLength = $scope.tempDropdownValue.length;
				if(dropdownLength == 0){
					$scope.listInput[temp].value = ['Option 1'];
				} else {
					$scope.listInput[temp].value = $scope.tempDropdownValue;
				}
				break;
			case 'radio':
				var radioButtonLength = $scope.tempRadioButtonValue.length;
				if(radioButtonLength == 0){
					$scope.listInput[temp].value = ['Radio 1'];
				} else {
					$scope.listInput[temp].value = $scope.tempRadioButtonValue;
				}
				break;
			case 'checkbox':
				var checkboxLength = $scope.tempCheckboxValue.length;
				if(checkboxLength == 0){
					$scope.listInput[temp].value = ['Checkbox 1'];
				} else {
					$scope.listInput[temp].value = $scope.tempCheckboxValue;
				}
				break;
			case 'textarea':
				$scope.listInput[temp].value = '';
		}
	};
	
	/** Adding New Dropdown Item **/
	$scope.addDropdown = function(currentItemInput){
		var temp = $scope.listInput.indexOf(currentItemInput);
		var i = $scope.listInput[temp].value.length;
		var text = 'Option'.concat(' ',i+1);
		
		$scope.listInput[temp].value.push(text);
		$scope.tempDropdownValue = $scope.listInput[temp].value;
	};

	/** Removing Current Dropdown Item **/
	$scope.removeDropdown = function(currentListInput,itemInputToRemove){
		var temp = $scope.listInput.indexOf(currentListInput);
		var i = $scope.listInput[temp].value.indexOf(itemInputToRemove);

		$scope.listInput[temp].value.splice(i,1);
		$scope.tempDropdownValue = $scope.listInput[temp].value;
	}

	/** Adding New Radio Button Items **/
	$scope.addRadioButton = function(currentItemInput){
		var temp = $scope.listInput.indexOf(currentItemInput);
		var i = $scope.listInput[temp].value.length;
		var text = 'Radio'.concat(' ',i+1);
		
		$scope.listInput[temp].value.push(text);
		$scope.tempRadioButtonValue = $scope.listInput[temp].value;
	};

	/** Removing Current Radio Button Items **/
	$scope.removeRadioButton = function(currentListInput,itemInputToRemove){
		var temp = $scope.listInput.indexOf(currentListInput);
		var i = $scope.listInput[temp].value.indexOf(itemInputToRemove);

		$scope.listInput[temp].value.splice(i,1);
		$scope.tempRadioButtonValue = $scope.listInput[temp].value;
	}

	/** Adding New Checkbox Items **/
	$scope.addCheckbox = function(currentItemInput){
		var temp = $scope.listInput.indexOf(currentItemInput);
		var i = $scope.listInput[temp].value.length;
		var text = 'Checkbox'.concat(' ',i+1);
		
		$scope.listInput[temp].value.push(text);
		$scope.tempCheckboxValue = $scope.listInput[temp].value;
	};

	/** Removing Current Checkbox Items **/
	$scope.removeCheckbox = function(currentListInput,itemInputToRemove){
		var temp = $scope.listInput.indexOf(currentListInput);
		var i = $scope.listInput[temp].value.indexOf(itemInputToRemove);

		$scope.listInput[temp].value.splice(i,1);
		$scope.tempCheckboxValue = $scope.listInput[temp].value;
	}
});