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