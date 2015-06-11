(function (angular) {
	'use strict';
	angular.module('todoList')
		.controller('TodoController', ['$scope', '$routeParams', 'toDoListService',
			function ($scope, $routeParams, toDoListService) {
				$scope.selectedTodo = {};
				
				function fetch() {
					toDoListService.get($routeParams.id).success(function(data) {
						$scope.selectedTodo = data;		
					});
				};
				fetch();
			 }]);
})(angular);