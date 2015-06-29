(function(){
	'use strict';
	
	angular.module('eliteApp').controller('MyTeamsCtrl', ['$state', 'myTeamsService', 'eliteApi', MyTeamsCtrl]);
	
	function MyTeamsCtrl($state, myTeamsService, eliteApi) {
		var vm = this;
		
		vm.myTeams = myTeamsService.getFollowedTeams();
		
		vm.gotoTeam = function(team){
			eliteApi.setLeagueId(team.leagueId);
			$state.go('app.team-detail', { id: team.id });
		};
	}
})();