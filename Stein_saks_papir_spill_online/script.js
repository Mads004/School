const options = document.querySelectorAll(".options");
let p1Score = 0;
let p2Score = 0;

function updateScore() {
  document.getElementById("p1-score").textContent = p1Score;
  document.getElementById("p2-score").textContent = p2Score;
  document.getElementById("score").textContent = score;
}



function spillerStein() {
  console.log('spiller1-stein');

  const cOptions = ["spiller2-stein", "spiller2-papir", "spiller2-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "spiller2-stein") {
    console.log('Uavgjort')
    document.getElementById("result").innerHTML = 'Det ble uavgjort!';
  }
  else if (computerChoice == "spiller2-saks") {
    console.log('Spiller2 Vinner')
    document.getElementById("result").innerHTML = 'Spiller1 vant!';
    p1Score++
  }
  else if (computerChoice == "spiller2-papir"){
    console.log('Spiller1 Taper')
    document.getElementById("result").innerHTML = 'Spiller2 vant!';
    p2Score++
  }
  console.log('Player: ', p1Score, ' -- Computer: ', p2Score);
  document.getElementById("cPoints").innerHTML = p2Score;
  document.getElementById("sPoints").innerHTML = p1Score;
  document.getElementById("p1Score").innerHTML = p1Score;
  document.getElementById("p2Score").innerHTML = p2Score;
}

function spillerSaks() {
  console.log('spiller1-saks');

  const cOptions = ["spiller2-stein", "spiller2-papir", "spiller2-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "spiller2-stein") {
    console.log('Spiller2 Vinner')
    document.getElementById("result").innerHTML = 'Spiller2 vant!';
    p2Score++
  }
  else if (computerChoice == "spiller2-saks") {
    console.log('Uavgjort')
    document.getElementById("result").innerHTML = 'Det ble uavgjort!';
  }
  else if (computerChoice == "spiller2-papir"){
    console.log('Spiller1 Vinner')
    document.getElementById("result").innerHTML = 'Spiller1 vant!';
    p1Score++
  }
  console.log('Player: ', p1Score, ' -- Computer: ', p2Score);
  document.getElementById("cPoints").innerHTML = p2Score;
  document.getElementById("sPoints").innerHTML = p1Score;
  document.getElementById("p1Score").innerHTML = p1Score;
  document.getElementById("p2Score").innerHTML = p2Score;
}

function spillerPapir() {
  console.log('spiller1-papir');

  const cOptions = ["spiller2-stein", "spiller2-papir", "spiller2-saks"];
  const computerChoice = cOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if (computerChoice == "spiller2-stein") {
    console.log('Spiller1 Vinner')
    document.getElementById("result").innerHTML = 'Spiller1 vant!';
    p1Score++
  }
  else if (computerChoice == "spiller2-saks") {
    console.log('Spiller2 Vinner')
    document.getElementById("result").innerHTML = 'Spiller2 vant!';
    p2Score++
  }
  else if (computerChoice == "spiller2-papir"){
    console.log('Uavgjort')
    document.getElementById("result").innerHTML = 'Det ble uavgjort!';
  }
  console.log('Player: ', p1Score, ' -- Computer: ', p2Score);
  document.getElementById("cPoints").innerHTML = p2Score;
  document.getElementById("sPoints").innerHTML = p1Score;
  document.getElementById("p1Score").innerHTML = p1Score;
  document.getElementById("p2Score").innerHTML = p2Score;
}
