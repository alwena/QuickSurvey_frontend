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

    var url = "http://localhost/QuickSurvey_backend/web/app_dev.php/api/user/"+$rootScope.userId+"/surveys";

    var listeEnquetes = $resource(url);

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

  }]);
