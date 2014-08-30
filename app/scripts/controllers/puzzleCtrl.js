﻿/* global angular */

angular.module('codeword')
	.controller('puzzleCtrl', ['$scope', '$routeParams', 'puzzle' , function ($scope, $routeParams, puzzle) {

		$scope.puzzleNumber = $routeParams.id;
		$scope.map = puzzle.map;
		$scope.state = puzzle.state;
		$scope.initState = puzzle.initState;
		$scope.selected = null;

		$scope.select = function (cell) {
			$scope.selected = cell;
		};

		$scope.setLetter = function (cell, option) {
			$scope.$apply(function () {
				puzzle.setLetter(cell, option);
			});
		};

		$scope.match = function (letter) {
			return puzzle.match(letter);
		};

	}]);