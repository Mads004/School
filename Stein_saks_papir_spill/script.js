const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

function updateScore() {
  document.getElementById("p-score").textContent = pScore;
  document.getElementById("c-score").textContent = cScore;
  document.getElementById("score").textContent = score;
}



function spillerStein() {
  console.log('spiller-stein');

  const cOptions = ["maskin-stein", "maskin-papir", "maskin-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "maskin-stein") {
    console.log('Uavgjort')
    document.getElementById("result").innerHTML = 'Det ble uavgjort!';
  }
  else if (computerChoice == "maskin-saks") {
    console.log('Spiller Vinner')
    document.getElementById("result").innerHTML = 'Spiller vant!';
    pScore++
  }
  else if (computerChoice == "maskin-papir"){
    console.log('Spiller Taper')
    document.getElementById("result").innerHTML = 'Maskin vant!';
    cScore++
  }
  console.log('Player: ', pScore, ' -- Computer: ', cScore);
  document.getElementById("cPoints").innerHTML = cScore;
  document.getElementById("sPoints").innerHTML = pScore;
  document.getElementById("pScore").innerHTML = pScore;
  document.getElementById("cScore").innerHTML = cScore;
}

function spillerSaks() {
  console.log('spiller-saks');

  const cOptions = ["maskin-stein", "maskin-papir", "maskin-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "maskin-stein") {
    console.log('Spiller Taper')
    document.getElementById("result").innerHTML = 'Maskin vant!';
    cScore++
  }
  else if (computerChoice == "maskin-saks") {
    console.log('Uavgjort')
    document.getElementById("result").innerHTML = 'Det ble uavgjort!';
  }
  else if (computerChoice == "maskin-papir"){
    console.log('Spiller Vinner')
    document.getElementById("result").innerHTML = 'Spiller vant!';
    pScore++
  }
  console.log('Player: ', pScore, ' -- Computer: ', cScore);
  document.getElementById("cPoints").innerHTML = cScore;
  document.getElementById("sPoints").innerHTML = pScore;
  document.getElementById("pScore").innerHTML = pScore;
  document.getElementById("cScore").innerHTML = cScore;
}

function spillerPapir() {
  console.log('spiller-papir');

  const cOptions = ["maskin-stein", "maskin-papir", "maskin-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "maskin-stein") {
    console.log('Spiller Vinner')
    document.getElementById("result").innerHTML = 'Spiller vant!';
    pScore++
  }
  else if (computerChoice == "maskin-saks") {
    console.log('Spiller Taper')
    document.getElementById("result").innerHTML = 'Maskin vant!';
    cScore++
  }
  else if (computerChoice == "maskin-papir"){
    console.log('Uavgjort')
    document.getElementById("result").innerHTML = 'Det ble uavgjort!';
  }
  console.log('Player: ', pScore, ' -- Computer: ', cScore);
  document.getElementById("cPoints").innerHTML = cScore;
  document.getElementById("sPoints").innerHTML = pScore;
  document.getElementById("pScore").innerHTML = pScore;
  document.getElementById("cScore").innerHTML = cScore;
}
