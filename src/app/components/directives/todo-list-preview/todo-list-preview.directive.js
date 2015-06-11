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
					templateUrl: 'app/components/directives/todo-list-preview/todo-list-preview.html' 	                
				}
			 }]);
})(angular);