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

    $scope.terminer = function () {

      //creation liste de personnes sondees
           var enqueteJson = sessionStorage.getItem('enquete');
           var enquete = JSON.parse(enqueteJson);

           $scope.listePersonnes = {};
           $scope.listePersonnes.personnes=[];

           var url = 'http://localhost/QuickSurvey_backend/web/app_dev.php/api/survey/'+enquete.id+'/persons';

            var listeSondes = $resource(url);

            $scope.listePersonnes.personnes = $scope.personnes;

            $scope.personnes = listeSondes.save($scope.listePersonnes);

            $scope.personnes.$promise.then(function (result) {

                  if ($scope.personnes.message != undefined) {
                        $window.alert($scope.personnes.message);
                  } else {
                  console.log(result);
                     $location.path('/accueil');
                  }
           });
    }

   $scope.ajouter = function () {
     var newPersonne = {
         "email" : ""
     };
     $scope.personnes.push(newPersonne);

   }

  }]);
