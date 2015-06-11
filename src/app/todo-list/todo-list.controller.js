(function (angular) {
	'use strict';
	angular.module('todoList')
		.controller('MainController', ['$scope', 'toDoListService',
			function ($scope, toDoListService) {
				this.view = {
					previewVisible : false,
					editVisible: false
				};
				$scope.todos = [];
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
						toDoListService.post($scope.selectedTodo).success(function(data) {
								fetch();
							});						
					} else {
						toDoListService.put($scope.selectedTodo.id, $scope.selectedTodo).success(function(data) {
								fetch();
							});
					}
					this.close();	
				};
				
				function fetch() {
					toDoListService.fetch().success(function(data) {
						$scope.todos = data.item;		
					});
				};
				fetch();
			 }]);
})(angular);