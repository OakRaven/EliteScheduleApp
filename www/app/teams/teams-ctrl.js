/// <reference path="../../../typings/angularjs/angular.d.ts" />

(function () {
	'use strict';

	angular.module('eliteApp').controller('TeamsCtrl', ['$scope', 'eliteApi', TeamsCtrl]);

	function TeamsCtrl($scope, eliteApi) {
		var vm = this;

		vm.loadList = function (forceRefresh) {
			eliteApi.getLeagueData(forceRefresh).then(function (data) {
				console.log(data.teams.length);
				vm.data = data;
			}).finally(function(){
				$scope.$broadcast('scroll.refreshComplete');
			});
		};
		
		vm.loadList(false);
	}
})();