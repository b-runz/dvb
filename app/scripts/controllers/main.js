'use strict';

/**
 * @ngdoc function
 * @name recordApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recordApp
 */
angular.module('recordApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
