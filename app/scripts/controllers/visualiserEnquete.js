'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:VisualiserEnqueteCtrl
 * @description
 * # VisualiserEnqueteCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('VisualiserEnqueteCtrl', [ '$scope', '$resource', '$location', '$rootScope', '$window', function ($scope, $resource, $location, $rootScope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   var listerQuestion;

   listerQuestion = function(idEnquete) {

      var url = 'http://localhost/QuickSurvey_backend/web/app_dev.php/api/survey/'+idEnquete+"/questions";

      var question = $resource(url);

      $scope.listeQuestions = question.query();

        $scope.listeQuestions.$promise.then(function (result) {

        if ($scope.listeQuestions.message != undefined) {
           $window.alert($scope.listeQuestions.message);
        } else {
          $scope.questions = result;
        }

       });

   };
   var init = function() {
      var enqueteJson = sessionStorage.getItem('enquete');

      if (enqueteJson) {
        var survey = JSON.parse(enqueteJson);
        $scope.survey = {};
        $scope.survey.id = survey.id;
        $scope.survey.dateCreated = new Date(survey.date_created);
        $scope.survey.dateStart = new Date(survey.date_start).toLocaleDateString();
        $scope.survey.dateEnd = new Date(survey.date_end).toLocaleDateString();
        $scope.survey.label = survey.label;

        listerQuestion($scope.survey.id);


      }
   }

   init();



    $scope.retour = function() {
         $location.path('/accueil');
    };

    $scope.afficherCible = function() {
        $location.path('/visualiserSondes');
    }


  }]);
