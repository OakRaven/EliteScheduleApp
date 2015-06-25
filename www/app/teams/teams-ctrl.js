/// <reference path="../../../typings/angularjs/angular.d.ts" />

(function () {
	'use strict';

	angular.module('eliteApp').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

	function TeamsCtrl(eliteApi) {
		var vm = this;

		eliteApi.getLeagues(function (data) {
			vm.teams = data.teams;
		});
	}
})();