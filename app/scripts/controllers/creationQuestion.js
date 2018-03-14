'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:CreationQuestionCtrl
 * @description
 * # CreationQuestionCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('CreationQuestionCtrl', [ '$scope', '$resource', '$location', '$rootScope', function ($scope, $resource, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var enqueteJson = sessionStorage.getItem('enquete');
    $scope.survey = JSON.parse(enqueteJson);

  }]);
