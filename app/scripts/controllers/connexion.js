'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('ConnexionCtrl', [ '$scope', '$resource', '$location', function ($scope, $resource, $location ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


   $scope.formulaireInscription = function() {
      $location.path('/inscription');
    };

    $scope.verificationCompte = function(){

       var userAccount = $resource('http://localhost/QuickSurvey_backend/web/app_dev.php/api/user/:login/:password',
        { login:'@login', password:'@password' });

        $scope.user1 = userAccount.get({login:$scope.user.login, password:$scope.user.password});

        $scope.user1.$promise.then(function (result) {
            $scope.user = result;

            if($scope.user.login != undefined) {
                 $location.path('/accueil');
            } else {
                console.log($scope.user.message);
            }
        });

    };



  }]);






