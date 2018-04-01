'use strict';

/**
 * @ngdoc function
 * @name quickSurveyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quickSurveyFrontendApp
 */
angular.module('quickSurveyApp')
  .controller('ConnexionCtrl', [ '$scope', '$resource', '$location', '$window', '$rootScope', '$uibModal', function ($scope, $resource, $location, $window, $rootScope, $uibModal   ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     sessionStorage.removeItem('userId');

   $scope.formulaireInscription = function() {
      $location.path('/inscription');
    };

    $scope.verificationCompte = function(){

       if ($scope.user && $scope.user.login && $scope.user.password ) {
       var userAccount = $resource('http://localhost/QuickSurvey_backend/web/app_dev.php/api/user/:login/:password',
        { login:'@login', password:'@password' });

        $scope.user1 = userAccount.get({login:$scope.user.login, password:$scope.user.password});

        $scope.user1.$promise.then(function (result) {
            $scope.user = result;

            if($scope.user.login != undefined) {
                 sessionStorage.setItem('userId',$scope.user.id);
                 $location.path('/accueil');
            } else {
                console.log($scope.user.message);
                $window.alert($scope.user.message);
                         }

        });
        } else {
           $window.alert("Veuillez saisir votre login et votre mot de passe!");

        }

    };



  }]);






