var crypto = require('crypto');


angular.module('sosaglezApp', [])
  .controller('MarvelCtrl', function($scope, $http) {
    $scope.$watch('search', function() {
      CallCharacters();
    });

    $scope.search = "";

    function CallCharacters() {
      var ts="1";
      var publicKey = "e80b6bcf1f06434860c9a3215203ea01";
      var privateKey = "0263c80cd25d6413fb170fa8d0271ca323966c9b";
      var data = ts+privateKey+publicKey;
      /*
      var hash=crypto.createHash('md5').update(data).digest("hex");
      */
      var hash='d081573cc8f997ce031a0a70d54c3428';
      var url = "http://gateway.marvel.com/v1/public/comics?"+ts+"&"+publicKey+"&"+hash;
      $http.get(url)
        .then(function(response) {
          $scope.details = response.data;
        });

      /*
      $http.get("https://www.omdbapi.com/?s=" + $scope.search)
        .then(function(response) {
          $scope.related = response.data;
        });
        */
    }

    /*
    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };
    */

    /*
    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
    */
  });
