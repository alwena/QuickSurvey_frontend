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
      $scope.user = result;
       $location.path('/connexion');
    });
    }
}
 };




  }]);
