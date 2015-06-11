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
					template: "<ul>" +
"    <li>" +
"        Id:{{selectedTodo.id}}" +        
"    </li>" +
"    <li>" +
"        Title:{{selectedTodo.title}}" +        
"    </li>" +
"    <li>" +
"        Upper:{{selectedTodo.title | uppercase}}" +        
"    </li>" +
"    <li>" +
"        Lower:{{selectedTodo.title | lowercase}}" +      
"    </li>" +
"    <li>" +
"        Date:{{selectedTodo.date | date:'yyyy-MM-dd hh:mm'}}" +        
"    </li>" +
"    <li>" +
"        Done:{{selectedTodo.done}}" +        
"    </li>" +
"    <li>" +
"        Textual done:{{selectedTodo.done | doneToText}}" +        
"    </li>" +
"</ul>"	                
				}
			 }]);
})(angular);