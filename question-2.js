

// Question 2 - make a call to the Rawg API

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f213a42cd01c4d39802914a86302dd8d";

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

setTimeout(function() {
    document.getElementById("loading").innerHTML = "loading..";


    async function makeApiCall(){
        try{
            const response = await fetch(corsFix);
    
            const results = await response.json();
    
            console.log(results);
    
        } catch(error) {
            console.log(error);
            resultsContainer.innerHTML = error
        }
    }
    makeApiCall();
}, 1000);

// Loop through the results and display the following properties in HTML, but only for the first eight results:

var resultater = [results];
results.forEach(myFunction);

function myFunction(resultats) {
    document.getElementById("liste").innerHTML + name + rating;
}

