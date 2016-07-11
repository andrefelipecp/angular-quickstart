'use strict';

define(['dep1','dep2' ], function (dep1, dep2) {

	
});

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'modulos/home/views/home.html',
    controller: 'modulos/home/controllers/home-controller.js'
  });
}]);