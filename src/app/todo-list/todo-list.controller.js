(function (angular) {
	'use strict';
	angular.module('todoList')
		.controller('MainController', ['$scope',
			function ($scope) {
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
				
				$scope.todos = [{
					id: 1,
					title: 'My Todo 1',
					date: new Date(),
					done: true
				},
				{
					id: 2,
					title: 'My Todo 2',
					date: new Date(),
					done: false
				}];
			 }]);
})(angular);