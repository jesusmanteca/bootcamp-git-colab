  
var url = 'http://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=7e8364c3a71e457d9e314ec1c97dff99';
var req = new Request(url);
fetch(req)
.then(function(response) {
console.log(response.json());
})