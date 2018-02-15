'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:CreationEnqueteCtrl
 * @description
 * # CreationEnqueteCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('CreationEnqueteCtrl', [ '$scope', '$resource', '$location', '$rootScope', function ($scope, $resource, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.creationQuestion = function(){
     $location.path('/question');
   }


  }]);
