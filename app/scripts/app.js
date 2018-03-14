'use strict';

/**
 * @ngdoc overview
 * @name quickSurveyFrontendApp
 * @description
 * # quickSurveyFrontendApp
 *
 * Main module of the application.
 */
var quickSurveyApp = angular
  .module('quickSurveyApp', [
  'ngRoute', 'ui.bootstrap', 'ngResource'
  ]);

var ModalInstanceCtrl = function($scope,$uibModalInstance, data) {
//var ModalInstanceCtrl = function ($scope, $uibModalInstance, $translate, data) {
    'use strict';
    $scope.data = data;
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.choixProfil = function (profil) {
        $uibModalInstance.close(profil);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
} ;

quickSurveyApp.config(['$routeProvider',
     function($routeProvider) {
          $routeProvider.
              when('/accueil', {
                   templateUrl: '/views/main.html',
                   controller: 'MainCtrl'
              }).
              when('/inscription', {
                   templateUrl: '/views/inscription.html',
                   controller: 'InscriptionCtrl'
              }).
              when('/connexion', {
                   templateUrl: '/views/connexion.html',
                   controller: 'ConnexionCtrl'
              }).
              when('/enquete', {
                   templateUrl: '/views/creation_enquete.html',
                   controller: 'CreationEnqueteCtrl'
              }).
              when('/question', {
                   templateUrl: '/views/creation_question.html',
                   controller: 'CreationQuestionCtrl'
              }).
              otherwise({
                   redirectTo: '/connexion'
              });
      }]);

quickSurveyApp.directive('footer', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        templateUrl: "footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    };
});

quickSurveyApp.directive('header', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        templateUrl: "header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
            //
        }]
    };
});


