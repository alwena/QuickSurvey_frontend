'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('MainCtrl', [ '$scope', '$resource', '$location', function ($scope, $resource, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var listeEnquetes = $resource('http://localhost/QuickSurvey_backend/web/app_dev.php/api/surveys');

     listeEnquetes = listeEnquetes.query();

     listeEnquetes.$promise.then(function (result) {
                 $scope.enquetes = result;
     });

    /*$scope.enquetes = [
      {"libelle": "enquete toto"},
      {"libelle": "enquete titi"}
    ];*/

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
