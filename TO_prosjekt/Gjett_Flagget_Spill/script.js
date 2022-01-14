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
"correctIndex": 0
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Belgia",
"Tyskland",
"Polen",
"Estland"
],
"correctIndex": 1
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Spania",
"Italia",
"Sveits",
"Frankrike"
],
"correctIndex": 3
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Mexico",
"Chile",
"Spania",
"Argentina"
],
"correctIndex": 2
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Canada",
"USA",
"England",
"Australia"
],
"correctIndex": 1
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Bulgaria",
"Nederland",
"Polen",
"Russland"
],
"correctIndex": 3
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Egypt",
"Israel",
"India",
"Syria"
],
"correctIndex": 0
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Japan",
"Vietnam",
"Kina",
"Taiwan"
],
"correctIndex": 2
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"Brasil",
"Portugal",
"Marokko",
"Colombia"
],
"correctIndex": 0
},
{
"question": "Hvilket flagg er dette?",
"answers": [
"New Zealand",
"Indonesia",
"Australia",
"Madagaskar"
],
"correctIndex": 2
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
var correctIndex = data.questions[count].correctIndex;
if (correctIndex == 0) {
poeng++;
console.log("Du svarte riktig. Du har poeng: ", poeng);
} else {
console.log("Du svarte feil. Du har poeng: ", poeng);
}
count++;
changeContent(count);
console.log("count ", count)
}



document.getElementById("2").onclick = function() {
var correctIndex = data.questions[count].correctIndex;
if (correctIndex == 1) {
poeng++;
console.log("Du svarte riktig. Du har poeng: ", poeng);
} else {
console.log("Du svarte feil. Du har poeng: ", poeng);
}
count++;
changeContent(count);
console.log("count ", count)
}



document.getElementById("3").onclick = function() {
var correctIndex = data.questions[count].correctIndex;
if (correctIndex == 2) {
poeng++;
console.log("Du svarte riktig. Du har poeng: ", poeng);
} else {
console.log("Du svarte feil. Du har poeng: ", poeng);
}
count++;
changeContent(count);
console.log("count ", count)
}



document.getElementById("4").onclick = function() {
var correctIndex = data.questions[count].correctIndex;
if (correctIndex == 3) {
poeng++;
console.log("Du svarte riktig. Du har poeng: ", poeng);
} else {
console.log("Du svarte feil. Du har poeng: ", poeng);
}
count++;
changeContent(count);
console.log("count ", count)
}



function changeContent(count){



if (count >= 9) {
console.log("Spillet er ferdig")
document.getElementById('answer-buttons').style.display = "none";
document.getElementById('question').innerText = "Gratulerer, du er ferdig. Du har klart "+poeng+" av 10 poeng!";
document.getElementById('next-btn').style.display = "none";
} else {
var alternativ1 = data.questions[count].answers[0];
console.log(alternativ1);
document.getElementById("1").innerHTML = alternativ1;



var alternativ2 = data.questions[count].answers[1];
console.log(alternativ2);
document.getElementById("2").innerHTML = alternativ2;



var alternativ3 = data.questions[count].answers[2];
console.log(alternativ3);
document.getElementById("3").innerHTML = alternativ3;



var alternativ4 = data.questions[count].answers[3];
console.log(alternativ4);
document.getElementById("4").innerHTML = alternativ4;



var correctIndex = data.questions[count].correctIndex;
var correctFlag = data.questions[count].answers[correctIndex];
//console.log('FLAG ', "flagg/"+correctFlag.toLowerCase()+".png");
console.log("flagg/"+correctFlag+".png");
document.getElementById("flag_image").src = "flagg/"+correctFlag+".png";
}



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
