'use strict';

/**
 * @ngdoc overview
 * @name sosaglezApp
 * @description
 * # sosaglezApp
 *
 * Main module of the application.
 */
angular
  .module('sosaglezApp', [
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
        controllerAs: 'main',
        activetab:'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activetab:'about'
      })
      .when('/perfomancechart', {
        templateUrl: 'views/perfomancechart.html',
        controller: 'PerfomancechartCtrl',
        controllerAs: 'perfomancechart',
        activetab:'peromancechart'
      })
      .when('/homeworks', {
        templateUrl: 'views/homeworks.html',
        controller: 'homeworksCtrl',
        controllerAs: 'homeworks',
        activetab:'homeworks'
      })
      .when('/homework_1', {
        templateUrl: 'views/homework_1.html',
        controller: 'homework_1Ctrl',
        controllerAs: 'homework_1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
