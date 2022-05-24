fetch('https://v2.jokeapi.dev/joke/Dark')
.then(response => response.json())
.then(data => console.log(data));

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
