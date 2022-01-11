const data = {
"questions": [
{
"question": "Hvilket flagg er dette?",
"answers": [
"Norge",
"Sverige",
"Danmark",
"Finland"
],
"correctIndex": 1
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Belgia",
"Polen",
"Tyskland",
"Estland"
],
"correctIndex": 3
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Spania",
"Italia",
"Sveits",
"Frankrike"
],
"correctIndex": 4
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Mexico",
"Chile",
"Spania",
"Argentina"
],
"correctIndex": 3
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Canada",
"USA",
"England",
"Australia"
],
"correctIndex": 2
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Bulgaria",
"Nederland",
"Polen",
"Russland"
],
"correctIndex": 4
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Egypt",
"Israel",
"India",
"Syria"
],
"correctIndex": 1
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Japan",
"Vietnam",
"Kina",
"Taiwan"
],
"correctIndex": 3
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Brasil",
"Portugal",
"Marokko",
"Colombia"
],
"correctIndex": 1
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"New Zealand",
"Indonesia",
"Australia",
"Madagaskar"
],
"correctIndex": 3
},
    ]
}

let count = 0;
let poeng = 0;

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElements = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElements.classList.remove('hide')
  setNextQuestion()
  }

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {

}

function resetState() {
  while (answerButtonsElement.firstCild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstCild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  nextButton.classList.remove('hide')
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const question = [
  {
    question: 'Hvilket flagg er dette?',
    answers: [
      {text: 'Norge', correct: true},
      {text: 'Sverige', correct: false}
    ]
  }
]

function buttonCheck(){
  if(document.getElementByClass('btn').clicked == true)
  {
    console.log('button was clicked')
  }
}

document.getElementById("1").onclick = function() {
  var correctIndex = data.questions[0].correctIndex;
  if (correctIndex == 1) {
    console.log("Du svarte riktig");
  } else {
    console.log("Du svarte feil");
  }
  changeContent();
}

document.getElementById("2").onclick = function() {
  var correctIndex = data.questions[0].correctIndex;
  if (correctIndex == 2) {
    console.log("Du svarte riktig");
  } else {
    console.log("Du svarte feil");
  }
  changeContent();
}

document.getElementById("3").onclick = function() {
  var correctIndex = data.questions[0].correctIndex;
  console.log(correctIndex);
}

document.getElementById("4").onclick = function() {
  var correctIndex = data.questions[0].correctIndex;
  console.log(correctIndex);
}

function changeContent(){

  var alternativ1 = data.questions[1].answers[0];
  console.log(alternativ1);
  document.getElementById("1").innerHTML = alternativ1;


}

/*document.getElementById("1").onclick = function() {
  var correctIndex = data.questions[count].correctIndex;
  console.log(count);
  if (correctIndex == 1) {
    console.log('Du svarte riktig');
    poeng++;
    console.log('Du har poeng: ', poeng);
  }
  count++;
  changeContent(count);
}*/
