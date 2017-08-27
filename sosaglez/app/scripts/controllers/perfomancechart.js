'use strict';

/**
 * @ngdoc function
 * @name sosaglezApp.controller:PerfomancechartCtrl
 * @description
 * # PerfomancechartCtrl
 * Controller of the sosaglezApp
 */
angular.module('sosaglezApp')
  .controller('PerfomancechartCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



 var trace1={

   x: [1,2,3,4,5,6,7,8,9,10,11,12,13],
   y: [90,0,0,0,0,0,0,0,0,0,0],
   type: 'scatter'
 };

 var data =[trace1]
 Plotly.newPlot("myDiv",data)
  });
