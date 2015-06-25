/// <reference path="../../../typings/angularjs/angular.d.ts" />

(function () {
	'use strict';

	angular.module('eliteApp').factory('eliteApi', ['$http', '$q', eliteApi]);

	function eliteApi($http, $q) {
		var currentLeagueId;

		function getLeagues() {
			var deferred = $q.defer();

			deferred.resolve([
				{ id: 2029, name: "6th Grade Saturday 2014-15 League" },
				{ id: 2024, name: "7th Grade MS JV Friday 2014-15 League" },
				{ id: 2025, name: "7th Grade MS JV Saturday 2014-15 League" },
				{ id: 2028, name: "7th-8th Grade HC Invitational 2014-15 League" },
				{ id: 2035, name: "8th Grade HYBA Spring 2015" },
				{ id: 2026, name: "8th Grade MS Varsity Friday 2014-15 League" },
				{ id: 2027, name: "8th Grade MS Varsity Saturday 2014-15 League" },
				{ id: 2023, name: "Ballin in the Fall " },
				{ id: 2036, name: "Friday Spring 2015 13U HCMS" },
				{ id: 2037, name: "Friday Spring 2015 13U LEMS" },
				{ id: 2020, name: "HCYP 4th Grade Girls Rec 2014-2015" },
				{ id: 2019, name: "Laker Challenge 2014" },
				{ id: 2034, name: "March Madness 2015 Tournament" },
				{ id: 2040, name: "Metro Classic 2015 Tournament" },
				{ id: 2039, name: "Spring Fling 2015 Tournament" },
				{ id: 2011, name: "Summer Showdown 2014" },
				{ id: 3037, name: "Summer Showdown 2015 Tournament" },
				{ id: 1005, name: '5th Grade Saturday 2013-14 League' },
				{ id: 1004, name: '6th Grade Friday 2013-14 League' },
				{ id: 2008, name: '7th Grade HYBA Spring 2014' },
				{ id: 1, name: '7th Grade MS JV Friday 2013-14 League' },
				{ id: 2, name: '7th Grade MS JV Saturday 2013-14 League' },
				{ id: 2012, name: '8th Grade HYBA Fall 2014' },
				{ id: 3, name: '8th Grade MS Varsity Friday 2013-14 League' },
				{ id: 1003, name: '8th Grade MS Varsity Saturday 2013-14 League' },
				{ id: 2007, name: 'Friday Spring 6th Grade' },
				{ id: 2005, name: 'March Madness Tournament 2014' },
				{ id: 2010, name: 'Metro Classic 2014' },
				{ id: 2009, name: 'Spring Fling Tournament 2014' }
			]);

			return deferred.promise;
		}

		function getLeagueData() {
			var deferred = $q.defer();

			$http.get('http://elite-schedule.net/api/leaguedata/' + currentLeagueId)
				.success(function (data, status) {
				console.log('Received schedule data via HTTP.', data, status);
				deferred.resolve(data);
			})
				.error(function () {
				console.log('Error while making HTTP call.');
				deferred.reject();
			});

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