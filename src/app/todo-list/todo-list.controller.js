(function (angular) {
	'use strict';
	angular.module('todoList')
		.controller('MainController', ['$scope', '$http',
			function ($scope, $http) {
				this.view = {
					previewVisible : false,
					editVisible: false
				};
				$scope.selectedTodo = {};
								
				this.showEdit = function() {
					this.view.editVisible = true;
					this.view.previewVisible = false;
				};

				this.showPreview = function() {
					this.view.editVisible = false;
					this.view.previewVisible = true;
				};
				
				this.close = function() {
					this.view.editVisible = false;
					this.view.previewVisible = false;
					$scope.selectedTodo = {};
				};
				
				this.select = function(todo) {
					$scope.selectedTodo = todo;	
					this.showPreview();
				};
				
				this.edit = function(todo) {
					$scope.selectedTodo = todo;	
					this.showEdit();
				};
				
				this.add = function() {
					$scope.selectedTodo = {};	
					this.showEdit();
				};
				
				this.save = function() {
					if ($scope.selectedTodo.date === undefined ||
						$scope.selectedTodo.date === null) {
						$scope.selectedTodo.date = new Date();
						if ($scope.selectedTodo.done === undefined) {
							$scope.selectedTodo.done = false;
						}
						$scope.todos.push($scope.selectedTodo);						
					}
					this.close();	
				};
				
				$http.get('https://api.baasic.com/beta/mathos-ng/resources/todolist/')
					.success(function(data) {
						$scope.todos = data.item;		
					});
			 }]);
})(angular);