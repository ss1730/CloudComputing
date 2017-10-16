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
        controller: 'HomeworksCtrl',
        controllerAs: 'homeworks',
        activetab:'homeworks'
      })
      .when('/homework_1', {
        templateUrl: 'views/homework_1.html',
        controller: 'homework_1Ctrl',
        controllerAs: 'homework_1'
      })
      .when('/homework_2', {
        templateUrl: 'views/homework_2.html',
        controller: 'homework_2Ctrl',
        controllerAs: 'homework_2'
      })
      .when('/homework_3', {
        templateUrl: 'views/homework_3.html',
        controller: 'homework_3Ctrl',
        controllerAs: 'homework_3'
      })
      .when('/homework_4', {
        templateUrl: 'views/homework_4.html',
        controller: 'Homework4Ctrl',
        controllerAs: 'homework4'
      })
      .when('/homework_5', {
        templateUrl: 'views/homework_5.html',
        controller: 'homework5Ctrl',
        controllerAs: 'homework5'
      })
      .when('/homework_6', {
        templateUrl: 'views/homework_6.html',
        controller: 'homework_6Ctrl',
        controllerAs: 'homework_6'
      })
      .when('/homework7', {
        templateUrl: 'views/homework7.html',
        controller: 'homework7Ctrl',
        controllerAs: 'homework7'
      })

      .otherwise({
        redirectTo: '/'
      });

  });
