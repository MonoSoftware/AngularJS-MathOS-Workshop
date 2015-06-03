(function (angular) {
	'use strict';
	angular.module('todoList')
		.controller('MainController', [
			function () {
				this.todo = {
					id: 1,
					title: 'My Todo'
				};
			 }]);
})(angular);