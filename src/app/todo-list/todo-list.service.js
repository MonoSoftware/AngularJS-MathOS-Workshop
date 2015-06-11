(function (angular) {
	'use strict';
	angular.module('todoList')
		.service('toDoListService', ['$http',
			function ($http) {
				var baseUrl = 'https://api.baasic.com/beta/mathos-ng/resources/todolist/';
				var token = '384EED6EAC87A55009E678B74EA36448E03AEBE0EE6A5A3600360993F843CBF495AFC379F3EDA291789DF8EB1643702F11B373233D55AAA63F32657FC79E44E6CF7FEA8FFE95A663B3254CD96015490674EC8022A1262CBDFE7B1F4FE2735EE697145B009C123590DBA7EE607B01BA3963D39EDE6D634EE2A8F0D0F0EB0DC5721B47A50F895FA7FE56FEE8A56AB72F1B7FD4DB4D77222DA1D0892DF2F93A7A362CADFC24D629E227E881BCE3CB45BCF055653063C1714CA4470302207C2A840D0946EDFDF59B195AE2904F2DFADA307723775A88C79150BADF41888EFA22C82C96EC9F71C182CCAE0690A9F93E3F21BC';

				return {
					fetch: function() {
						return $http.get(baseUrl);
					},
					get: function(id) {
						return $http.get(baseUrl + id);
					},
					post: function(data) {
						var req = {
						 method: 'POST',
						 url: baseUrl,
						 headers: {
						   'Authorization': 'bearer ' + token
						 },
						 data: data
						};
						return $http(req);	
					},
					put: function(id, data) {
						var req = {
						 method: 'PUT',
						 url: baseUrl + id,
						 headers: {
						   'Authorization': 'bearer ' + token
						 },
						 data: data
						};
						return $http(req);
					}
				};
			 }]);
})(angular);