/// <reference path="../../../typings/angularjs/angular.d.ts" />

(function(){
	'use strict';
	
	angular.module('eliteApp').factory('myTeamsService', ['CacheFactory', 'eliteApi', myTeamsService]);
	
	function myTeamsService(CacheFactory, eliteApi){
		var self = this;
		
		self.myTeamsCache = CacheFactory.get('myTeamsCache');
		
		function followTeam(team) {
			team.leagueId = eliteApi.getLeagueId();
			console.log('Following', team);
			self.myTeamsCache.put(team.id, team);
		}
		
		function unfollowTeam(teamId) {
			console.log('Unfollowing', teamId);
			self.myTeamsCache.remove(teamId.toString());
		}
		
		function getFollowedTeams() {
			var teams = [],
				keys = self.myTeamsCache.keys();
				
			for(var i = 0; i < keys.length; i ++){
				var team = self.myTeamsCache.get(keys[i]);
				teams.push(team);
			}
		
			return teams;	
		}
		
		function isFollowingTeam(teamId) {
			var team = self.myTeamsCache.get(teamId);
			return team;
		}
		
		return {
			followTeam: followTeam,
			unfollowTeam: unfollowTeam,
			getFollowedTeams: getFollowedTeams,
			isFollowingTeam: isFollowingTeam
		};
	}	
})();