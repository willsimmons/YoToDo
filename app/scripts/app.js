'use strict';

/**
 * @ngdoc overview
 * @name yotodoApp
 * @description
 * # yotodoApp
 *
 * Main module of the application.
 */
angular
  .module('yotodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
