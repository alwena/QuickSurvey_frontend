'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:InscriptionCtrl
 * @description
 * # InscriptionCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('InscriptionCtrl', [ '$scope', '$resource', '$location', '$window', function ($scope, $resource, $location, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


 $scope.sauvegarder = function() {

    //verification données obligatoires
    if ($scope.user === undefined || $scope.user.login === undefined || $scope.user.login === ""
        || $scope.user.email === undefined || $scope.user.email === ""
        || $scope.user.confEmail === undefined || $scope.user.confEmail === ""
        || $scope.user.password === undefined || $scope.user.password === ""
        || $scope.user.confPassword === undefined || $scope.user.confPassword === "") {
        $window.alert("Veuillez renseigner toutes les informations avant d'enregistrer");
    } else {

    //verification email
    if ($scope.user.email != $scope.user.confEmail) {
       $window.alert("Probleme dans la confirmation de l'email");
    } else {

    //verif password
    if ($scope.user.password != $scope.user.confPassword) {
           $window.alert("Probleme dans la confirmation du password");
    } else {

    var userAccount = $resource('http://localhost/QuickSurvey_backend/web/app_dev.php/api/user');

    $scope.userCreate = userAccount.save($scope.user);

    $scope.userCreate.$promise.then(function (result) {
      if ($scope.userCreate.message != undefined) {
         $window.alert($scope.userCreate.message);
      } else {
          $scope.user = result;
          $location.path('/connexion');
      }
    });
    }
   }
   }
 };




  }]);
