﻿angular.module('codeword')
    .controller('selectCtrl', function ($scope) {

        $scope.range = function (n) {

        	var a = [];
        	
        	for (var i = 0; i < n; i++) {
        		a.push(i);
        	}

        	return a;

        }

    });