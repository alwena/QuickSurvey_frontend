'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('MainCtrl', [ '$scope', '$resource', '$location', '$rootScope', function ($scope, $resource, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var userId = sessionStorage.getItem('userId');
    var url = "http://localhost/QuickSurvey_backend/web/app_dev.php/api/user/"+userId+"/surveys";

    var listeEnquetes = $resource(url);
    sessionStorage.removeItem('enquete');

     listeEnquetes = listeEnquetes.query();

     listeEnquetes.$promise.then(function (result) {
                 $scope.enquetes = result;
     });

    $scope.deconnexion = function() {
      $location.path('/connexion');
    };

  $scope.creerNouvelleEnquete = function(){
      $location.path('/enquete');
  }

  $scope.afficherEnquete = function(survey) {

      var enqueteJson = JSON.stringify(survey);
      sessionStorage.setItem('enquete',enqueteJson);
      $location.path('/enquete');
  }
  }]);
