'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'modulos/login/views/login.html',
    controller: 'modulos/login/controllers/login-controller.js'
  });
}]);