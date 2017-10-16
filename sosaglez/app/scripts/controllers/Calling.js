

var http = require("http");

var ts="1";
var publicKey = "e80b6bcf1f06434860c9a3215203ea01";
var privateKey = "0263c80cd25d6413fb170fa8d0271ca323966c9b";
var data = ts+privateKey+publicKey;
/*
var hash=crypto.createHash('md5').update(data).digest("hex");
*/
var hash='d081573cc8f997ce031a0a70d54c3428';
/*
var url = "http://gateway.marvel.com/v1/public/comics?"+ts+"&"+publicKey+"&"+hash;
*/
var url='http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e80b6bcf1f06434860c9a3215203ea01&hash=d081573cc8f997ce031a0a70d54c3428';

var request = http.get(url, function (response) {

  var buffer = "",
    data;

  response.on("data", function (chunk) {
    buffer += chunk;
  });

  response.on("end", function (err) {

    /*
    console.log(buffer);
    console.log("\n");
    */
    var names =[];
    data = JSON.stringify(buffer);
    var object = JSON.parse(data);
    console.log(object['name'].name);
    // extract the distance and time
    /*
    console.log("Walking Distance: " +data);
*/
  });
});

