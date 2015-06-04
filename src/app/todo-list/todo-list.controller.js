(function (angular) {
	'use strict';
	angular.module('todoList')
		.controller('MainController', ['$scope',
			function ($scope) {
				$scope.todo = {
					id: 1,
					title: 'My Todo',
					date: new Date(),
					done: true
				};
			 }]);
})(angular);