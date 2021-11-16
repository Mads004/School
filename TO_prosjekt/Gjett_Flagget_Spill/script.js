const startButton = document.getElementById('start-btn')
const questionContainerElements = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame(){
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElements.classList.remove('hide')
  setNextQuestion()
  }

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innterText = question.question
}

function selectAnswer() {

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
