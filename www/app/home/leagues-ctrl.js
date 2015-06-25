(function(){
	'use strict';
	
	angular.module('eliteApp').controller('LeagueCtrl', ['$state', 'eliteApi', LeagueCtrl]);
	
	function LeagueCtrl($state, eliteApi){
		var vm = this;
		
		eliteApi.getLeagues().then(function(data){
			vm.leagues = data;
		});				
		
		vm.selectLeague = function(leagueId){
			eliteApi.setLeagueId(leagueId);
			$state.go('app.teams');	
		};
	};
})();