'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:CreationQuestionCtrl
 * @description
 * # CreationQuestionCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('CreationQuestionCtrl', [ '$scope', '$resource', '$location', '$rootScope','$window', function ($scope, $resource, $location, $rootScope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var enqueteJson = sessionStorage.getItem('enquete');
    $scope.survey = JSON.parse(enqueteJson);

  $scope.questions = [{
     "libelle" : ""
        }
   ,
   {
        "libelle" : ""
         }];


    $scope.retour = function() {
      $location.path('/enquete');
    };

    $scope.enregistrer = function () {
     var essai;
     $scope.questionCreate = $scope.questions;

    };

    $scope.affichageNombreChoix = function (question) {
      if (question.type === 'choix') {
       question.choixActive = true;
       } else {
       question.choixActive = false;
       }
    };

   $scope.affichageChoix = function (question) {

         question.choix = [];

         if (question.nombreChoix < 2){
             $window.alert("Le nombre de choix doit être supérieur ou égal à 2");
         } else {
           for (var i=0; i <question.nombreChoix; i++) {
             question.choix[i]={};
             question.choix[i].numero = i+1;
             question.choix[i].libelle = "";
            }
         }
       };
   $scope.ajouter = function () {
     var newQuestion = {
         "libelle" : ""
     };
     $scope.questions.push(newQuestion);

   }

  }]);
