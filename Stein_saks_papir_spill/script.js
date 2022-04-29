const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

function game(){
console.log('Started Game | Game Button Is Hidden')
document.getElementById('gameButton').style.display = "none";
}



function updateScore() {
  document.getElementById("p-score").textContent = pScore;
  document.getElementById("c-score").textContent = cScore;
}



function spillerStein() {
  console.log('Spiller Stein');

  const cOptions = ["maskin-stein", "maskin-papir", "maskin-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "maskin-stein") {
    console.log('Uavgjort')
  }
  else if (computerChoice == "maskin-saks") {
    console.log('Spiller Vinner')
    pScore++
  }
  else if (computerChoice == "maskin-papir"){
    console.log('Spiller Taper')
    cScore++
  }
  console.log('Player: ', pScore, ' -- Computer: ', cScore);
  document.getElementById("cPoints").innerHTML = cScore;
}

function spillerSaks() {
  console.log('Spiller Saks');

  const cOptions = ["maskin-stein", "maskin-papir", "maskin-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "maskin-stein") {
    console.log('Spiller Taper')
    cScore++
  }
  else if (computerChoice == "maskin-saks") {
    console.log('Uavgjort')
  }
  else if (computerChoice == "maskin-papir"){
    console.log('Spiller Vinner')
    pScore++
  }
}

function spillerPapir() {
  console.log('Spiller Papir');

  const cOptions = ["maskin-stein", "maskin-papir", "maskin-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "maskin-stein") {
    console.log('Spiller Vinner')
    pScore++
  }
  else if (computerChoice == "maskin-saks") {
    console.log('Spiller Taper')
    cScore++
  }
  else if (computerChoice == "maskin-papir"){
    console.log('Uavgjort')
  }
}
