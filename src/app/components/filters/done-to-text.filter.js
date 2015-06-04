(function (angular) {
	'use strict';
	angular.module('todoList').filter('doneToText', function() {
		return function(input) {
			if (input !== undefined && input) {
				return 'Finished';
			}
			return 'Not finished';
		};
	});	
})(angular);