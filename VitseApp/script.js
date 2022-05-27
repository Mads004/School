function fetchJoke() {

  wordInput = document.getElementById('text').innerHTML;

  var inputURL = "https://v2.jokeapi.dev/joke/Any?type=single&contains="+wordInput;

  fetch(inputURL)
  .then(response => response.json())
  .then(data => console.log(data));

}

function showText() {
  console.log("Found InnerText")
  document.getElementById('vits').innerText = "En vits";
}

function updateValue() {
   document.getElementById('vits').display = "none";
}

if(document.getElementById('newVits').clicked == true){
 console.log("button was clicked");
}

fetchJoke();

console.log(wordInput)
