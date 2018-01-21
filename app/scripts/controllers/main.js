'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('MainCtrl', [ '$scope', '$location', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.enquetes = [
      {"libelle": "enquete 1"},
      {"libelle": "enquete 2"}
    ];
    
    $scope.deconnexion = function() {
      $location.path('/connexion');
    };
    
  $scope.creerNouvelleEnquete = function(){
    if ($scope.connexion) {
      $location.path('/enquete');
    } else {
      $location.path('connexion');
    }
  }

  }]);
