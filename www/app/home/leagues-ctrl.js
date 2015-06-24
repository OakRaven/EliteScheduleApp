(function(){
	'use strict';
	
	angular.module('eliteApp').controller('LeagueCtrl', ['$state', 'eliteApi', LeagueCtrl]);
	
	function LeagueCtrl($state, eliteApi){
		var vm = this;
		
		var leagues = eliteApi.getLeagues();		
		vm.leagues = leagues;
		
		vm.selectLeague = function(leagueId){
			//TODO: select correct League
			$state.go('app.teams');	
		};
	};
})();