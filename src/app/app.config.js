(function (angular) {
	'use strict';

	angular.module('todoList')
		.config(['$routeProvider',
			function routeConfig($routeProvider) {
			$routeProvider
				.when('/', { templateUrl: 'app/todo-list/list.html', title: 'ToDo List' })
				.when('/insert', { templateUrl: 'app/todo-list/insert.html', title: 'Insert ToDo' })
				.when('/preview', { templateUrl: 'app/todo-list/preview.html', title: 'Insert ToDo' })
				.otherwise({ redirectTo: '/' });
		}]);

	
})(angular);