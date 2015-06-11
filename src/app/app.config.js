(function (angular) {
	'use strict';
	angular.module('todoList')
		.config(['$routeProvider',
			function ($routeProvider) {
			 
			$routeProvider
				.when('/', { 
					templateUrl: 'app/todo-list/todo-list.html', 
					title: 'ToDo List',
					controller: 'MainController',
					controllerAs: 'main' 
				})
				.when('/todo/:id', { 
					templateUrl: 'app/todo/todo.html', 
					title: 'Preview ToDo', 
					controller: 'TodoController'
				})				
				.otherwise({ redirectTo: '/' });
			
		}]);	
})(angular);