(function(){
	'use strict';
	
	angular.module('eliteApp').controller('LeagueCtrl', ['eliteApi', LeagueCtrl]);
	
	function LeagueCtrl(eliteApi){
		var vm = this;
		
		var leagues = eliteApi.getLeagues();
		var leagueData = eliteApi.getLeagueData();
		
		console.log("leagues", leagues.length);
		console.log("leagueData", leagueData.games.length);
	};
})();