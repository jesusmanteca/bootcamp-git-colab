var APIKeyNewsAPI = "7e8364c3a71e457d9e314ec1c97dff99"

var NewsAPIFunction = function(){
    fetch
     (
      'https://newsapi.org/v2/top-headlines?country=us&apiKey='
      + APIKeyNewsAPI
    )   
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
          console.log(response)
      })
}
NewsAPIFunction()


fetch("https://newscatcher.p.rapidapi.com/v1/sources?lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newscatcher.p.rapidapi.com",
		"x-rapidapi-key": "be05fa2f65msh0088fc5f31fce3cp1260e4jsn80113c6cf080"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

var nytimesDiv = document.getElementById("nytimes");
var url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" +
        "lxhiYmDkE544uuZFkAV0NsGeWmRGaISS"

var request = function() {
    fetch(url).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data);
        console.log(data.results)
        console.log(data.results[0])
        console.log(data.results[0].title)
        console.log(data.results[0].abstract)
        var nytimesAbstract = data.results[0].abstract
        var nytimesTitle = data.results[0].title
        var newDivTitleEl = document.createElement("h3")
        var newDivAbstractEl = document.createElement("div")
        newDivTitleEl.innerHTML = "Headline: " + nytimesTitle
        newDivAbstractEl.innerHTML = "Synopsis: " + nytimesAbstract
        newDivTitleEl.setAttribute("style", "font-weight: bold; color: red;")
        nytimesDiv.appendChild(newDivTitleEl);
        nytimesDiv.appendChild(newDivAbstractEl);
    })
}
request()
    

var googleAPI = "AIzaSyB71Mti1leTwQWvaLrlOvyWsFbKAfodmXY"
