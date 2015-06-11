(function (angular) {
	'use strict';
	angular.module('todoList')
		.directive('todoListPreview', [
			function () {
				return {
	                restrict: "E",
	                replace: true,
					scope: {
	                    selectedTodo: '='
	                },
					templateUrl: 'app/todo-list/todo-list-preview.html' 	                
				}
			 }]);
})(angular);