/// <reference path="../../../typings/angularjs/angular.d.ts" />

(function () {
	'use strict';

	angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', eliteApi]);

	function eliteApi($http, $q, $ionicLoading, CacheFactory) {
		var currentLeagueId;

		var self = this;

		self.leaguesCache = CacheFactory.get('leaguesCache');
		self.leagueDataCache = CacheFactory.get('leagueDataCache');

		function getLeagues() {
			var deferred = $q.defer(),
				cacheKey = 'leagues',
				leaguesData = self.leaguesCache.get(cacheKey);

			if (leaguesData) {
				console.log('Found data inside cache', leaguesData);
				deferred.resolve(leaguesData);
			} else {
				var data = [
					{ id: 1, name: '7th Grade MS JV Friday 2013-14 League' },
					{ id: 2, name: '7th Grade MS JV Saturday 2013-14 League' },
					{ id: 2005, name: 'March Madness Tournament 2014' },
					{ id: 2008, name: '7th Grade HYBA Spring 2014' },
					{ id: 2009, name: 'Spring Fling Tournament 2014' },					
					{ id: 2010, name: 'Metro Classic 2014' },
					{ id: 2011, name: "Summer Showdown 2014" },
					{ id: 2012, name: '8th Grade HYBA Fall 2014' },
					{ id: 2019, name: "Laker Challenge 2014" },
					{ id: 2023, name: "Ballin in the Fall " },
					{ id: 2034, name: "March Madness 2015 Tournament" },
					{ id: 2036, name: "Friday Spring 2015 13U HCMS" },
					{ id: 2039, name: "Spring Fling 2015 Tournament" },
					{ id: 2040, name: "Metro Classic 2015 Tournament" },
					{ id: 3037, name: "Summer Showdown 2015 Tournament" }
				];

				self.leaguesCache.put(cacheKey, data);
				deferred.resolve(data);
			}

			return deferred.promise;
		}

		function getLeagueData() {
			var deferred = $q.defer(),
				cacheKey = 'leagueData-' + currentLeagueId,
				leagueData = self.leagueDataCache.get(cacheKey);

			if (leagueData) {
				console.log('Loaded league data from cache');
				deferred.resolve(leagueData);
			} else {
				$ionicLoading.show({ template: 'Loading...' });

				$http.get('http://elite-schedule.net/api/leaguedata/' + currentLeagueId)
					.success(function (data, status) {
					self.leagueDataCache.put(cacheKey, data);
					$ionicLoading.hide();
					console.log('Received schedule data via HTTP.', data, status);
					deferred.resolve(data);
				})
					.error(function () {
					$ionicLoading.hide();
					console.log('Error while making HTTP call.');
					deferred.reject();
				});
			}

			return deferred.promise;
		}

		function setLeagueId(leagueId) {
			currentLeagueId = leagueId;
			console.log('currentLeagueId', currentLeagueId);
		}

		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData,
			setLeagueId: setLeagueId
		};
	};

})();