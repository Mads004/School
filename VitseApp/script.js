function fetchJoke() {

  wordInput = document.getElementById('text').innerHTML;

  var inputURL = "https://v2.jokeapi.dev/joke/Any?type=single&contains="+wordInput;

  fetch(inputURL)
  .then(response => response.json())
  .then(data => updateValue(data.joke));

}

function showText() {
  console.log("Found InnerText");
  document.getElementById('vits').innerText = "En vits";
}

function updateValue(data) {
   document.getElementById('vits').display = "none";
   document.getElementById('vits').innerText = data;
}

fetchJoke();

console.log(wordInput)
