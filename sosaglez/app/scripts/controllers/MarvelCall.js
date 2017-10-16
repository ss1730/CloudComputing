var crypto = require('crypto');


$scope.search="Spider";

$scope.$watch('search',function() {
  GetCharacters();
});

function GetCharacters(){

  var ts="1";
  var publicKey = "e80b6bcf1f06434860c9a3215203ea01";
  var privateKey = "0263c80cd25d6413fb170fa8d0271ca323966c9b";
  var data = ts+privateKey+publicKey;
  var hash=crypto.createHash('md5').update(data).digest("hex");

  var url = "http://gateway.marvel.com/v1/public/comics?"+ts+"&"+publicKey+"&"+hash;

  $http.get(url)
    .then(function(response){ $scope.details = response.data.name; });


}
