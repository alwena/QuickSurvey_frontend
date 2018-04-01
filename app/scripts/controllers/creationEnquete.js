'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:CreationEnqueteCtrl
 * @description
 * # CreationEnqueteCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('CreationEnqueteCtrl', [ '$scope', '$resource', '$location', '$rootScope', '$window', function ($scope, $resource, $location, $rootScope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   var controleDonnee;

   var init = function() {
      var enqueteJson = sessionStorage.getItem('enquete');

      if (enqueteJson) {
        var survey = JSON.parse(enqueteJson);
        $scope.survey = {};
        $scope.survey.id = survey.id;
        $scope.survey.dateCreated = new Date(survey.date_created);
        $scope.survey.dateStart = new Date(survey.date_start);
        $scope.survey.dateEnd = new Date(survey.date_end);
        $scope.survey.label = survey.label;
        $scope.enqueteExiste = true;
      }
   }

   init();
   $scope.creationEnquete = function(){
         if (controleDonnee()) {

              //creation enquete
              var userId = sessionStorage.getItem('userId');
              var url = 'http://localhost/QuickSurvey_backend/web/app_dev.php/api/survey/'+surveyId;

              var enquete = $resource(url);

              $scope.enqueteCreate = enquete.save($scope.survey);

              $scope.enqueteCreate.$promise.then(function (result) {

                    if ($scope.enqueteCreate.message != undefined) {
                        $window.alert($scope.enqueteCreate.message);
                    } else {
                      $scope.survey = result;
                      var enqueteJson = JSON.stringify($scope.survey);
                      sessionStorage.setItem('enquete',enqueteJson);
                      $rootScope.enquete = $scope.survey;
                      $location.path('/question');
                    }
              });

         }
   };

    $scope.modificationEnquete = function(){
        if (controleDonnee() && $scope.survey.id) {

              var url = 'http://localhost/QuickSurvey_backend/web/app_dev.php/api/survey/'+$scope.survey.id;

              var enquete = $resource(url, null, {'update': { method:'PUT' }});

              $scope.enqueteModifier = enquete.update($scope.survey);
              $scope.enqueteModifier.$promise.then(function (result) {

                  if ($scope.enqueteModifier.message != undefined) {
                        $window.alert($scope.enqueteModifier.message);
                  } else {
                        $scope.survey = result;
                        var enqueteJson = JSON.stringify($scope.survey);
                        sessionStorage.setItem('enquete',enqueteJson);
                        $rootScope.enquete = $scope.survey;
                        $location.path('/question');
                  }
              });
        }
    }

    $scope.retour = function() {
         $location.path('/accueil');
    };

  controleDonnee = function() {

       var controleOk = false
       if ($scope.survey === undefined || $scope.survey.label === undefined) {
           $window.alert("Le nom de l'enquête est obligatoire");
       } else {
             if ($scope.survey.dateStart === undefined) {
                 $window.alert("La date de début est obligatoire");
             } else {
                  if ($scope.survey.dateEnd === undefined) {
                     $window.alert("La date de fin est obligatoire");
                  } else {
                     var dateJour = new Date();
                     var jourDateJour = dateJour.getDate();
                     if (jourDateJour < 10) {
                      jourDateJour = "0".concat(jourDateJour)
                     }
                     var anneeDateJour = dateJour.getFullYear();
                     var moisDateJour = dateJour.getMonth()+1;
                     if (moisDateJour < 10) {
                      moisDateJour = "0".concat(moisDateJour);
                     }
                     var dateJourInt = "";
                     dateJourInt = dateJourInt.concat(anneeDateJour);
                     dateJourInt = dateJourInt.concat(moisDateJour);
                     dateJourInt = dateJourInt.concat(jourDateJour);

                     var jourDateStart  = $scope.survey.dateStart.getDate();
                     if (jourDateStart < 10) {
                       jourDateStart = "0".concat(jourDateStart)
                     }
                     var anneeDateStart = $scope.survey.dateStart.getFullYear();
                     var moisDateStart = $scope.survey.dateStart.getMonth()+1;
                     if (moisDateStart < 10) {
                       moisDateStart = "0".concat(moisDateStart)
                     }
                     var dateStartInt = "";
                     dateStartInt = dateStartInt.concat(anneeDateStart);
                     dateStartInt = dateStartInt.concat(moisDateStart);
                     dateStartInt = dateStartInt.concat(jourDateStart);

                     var jourDateEnd = $scope.survey.dateEnd.getDate();
                     if (jourDateEnd < 10) {
                        jourDateEnd = "0".concat(jourDateEnd)
                     }
                     var anneeDateEnd = $scope.survey.dateEnd.getFullYear();
                     var moisDateEnd = $scope.survey.dateEnd.getMonth()+1;
                     if (moisDateEnd < 10) {
                       moisDateEnd = "0".concat(moisDateEnd)
                     }
                     var dateEndInt = anneeDateEnd+moisDateEnd+jourDateEnd;

                    if (dateStartInt < dateJourInt) {
                        $window.alert("La date de début ne peut pas être inférieure à la date du jour");
                     } else {
                        if (dateEndInt < dateStartInt) {
                          $window.alert("La date de fin ne peut pas être inférieure à la date de début");
                        } else {
                          controleOk = true;
                        }
                     }
                  }
             }
       }
       return controleOk;
  };

  }]);
