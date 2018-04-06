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
     $scope.questionsCreate = {};
     $scope.questionsCreate.questions = [];

      for (var i=0; i<$scope.questions.length; i++) {
         $scope.question = {};
         $scope.question.label = $scope.questions[i].libelle;
         $scope.question.choices = [];
         if ($scope.questions[i].type == "libre") {
            $scope.question.hasOrder = false;
            $scope.question.isMultiSelect = false;
            $scope.question.maxAnswer = 0;

         } else {
            if ($scope.questions[i].priorite === "true") {
              $scope.question.hasOrder = true;
            } else {
              $scope.question.hasOrder = false;
            }
            if ($scope.questions[i].choixMultiple === "true") {
             $scope.question.isMultiSelect = true;
             $scope.question.maxAnswer = parseInt($scope.questions[i].maxChoix);
            } else {
             $scope.question.isMultiSelect = false;
             $scope.question.maxAnswer = 0;
            }


            for (var j=0; j<$scope.questions[i].choix.length; j++){
               $scope.choix = {};
               $scope.choix.label = $scope.questions[i].choix[j].libelle;
               $scope.question.choices.push($scope.choix);
            }
         }

         $scope.questionsCreate.questions.push($scope.question);
      }
     //creation enquete
      var enqueteJson = sessionStorage.getItem('enquete');
      var enquete = JSON.parse(enqueteJson);

      var url = 'http://localhost/QuickSurvey_backend/web/app_dev.php/api/survey/'+enquete.id+"/questions";

       var question = $resource(url);

       $scope.questionsCreate = question.save($scope.questionsCreate);

       $scope.questionsCreate.$promise.then(function (result) {

             if ($scope.questionsCreate.message != undefined) {
                   $window.alert($scope.questionsCreate.message);
             } else {
                $location.path('/personne');
             }
      });


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
