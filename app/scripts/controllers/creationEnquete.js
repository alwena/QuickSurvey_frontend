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

   var controleDonneeObligatoire;

   $scope.creationEnquete = function(){
         if (controleDonneeObligatoire()) {

              //creation enquete
              var userId = sessionStorage.getItem('userId');
              var url = 'http://localhost/QuickSurvey_backend/web/app_dev.php/api/user/'+userId+'/survey';

              var enquete = $resource(url);

              $scope.enqueteCreate = enquete.save($scope.survey);

               $scope.enqueteCreate.$promise.then(function (result) {
                    $scope.survey = result;
                    var enqueteJson = JSON.stringify($scope.survey);
                    sessionStorage.setItem('enquete',enqueteJson);
                    $rootScope.enquete = $scope.survey;
                     $location.path('/question');
               });

         }

   };

  controleDonneeObligatoire = function() {

       var controleOk = false
       if ($scope.survey === undefined || $scope.survey.label === undefined) {
           $window.alert("Le libellé est obligatoire");
       } else {
             if ($scope.survey.dateCreated === undefined) {
                 $window.alert("La date de début obligatoire");
             } else {
                  if ($scope.survey.dateEnd === undefined) {
                     $window.alert("La date de fin est obligatoire");
                  } else {
                     controleOk = true;
                  }
             }
       }
       return controleOk;
  };

  }]);
