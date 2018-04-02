'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:ListeSondeCtrl
 * @description
 * # ListeSondeCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('ListeSondeCtrl', [ '$scope', '$resource', '$location', '$rootScope','$window', function ($scope, $resource, $location, $rootScope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var enqueteJson = sessionStorage.getItem('enquete');
    $scope.survey = JSON.parse(enqueteJson);

    $scope.personnes = [{
         "email" : ""
            }
       ,
       {
            "email" : ""
             }];

     var init = function() {




     }

   $scope.ajouter = function () {
     var newPersonne = {
         "email" : ""
     };
     $scope.personnes.push(newPersonne);

   }

  }]);
