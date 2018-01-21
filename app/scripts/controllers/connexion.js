'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('ConnexionCtrl', [ '$scope', '$location', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


   $scope.formulaireInscription = function() {
      $location.path('/inscription');
    };

    $scope.verificationCompte = function(){
      $location.path('/accueil');
    }

  }]);


   



  