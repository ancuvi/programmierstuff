const questions = [
  // Array mit Fragen
  {
    question: "Wer hat den Größten?",
    answers: [
      { text: "Du", correct: false },
      { text: "Angelo", correct: true },
      { text: "John Doe", correct: false },
      { text: "Deine Mutter", correct: false },
    ],
  },
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      { text: "Düsseldorf", correct: false },
      { text: "Cottbus", correct: false },
      { text: "Brasilien", correct: false },
      { text: "Berlin", correct: true },
    ],
  },
  {
    question: "welches Tier ist am schnellsten?",
    answers: [
      { text: "Gepard", correct: true },
      { text: "Esel", correct: false },
      { text: "Seeadler", correct: false },
      { text: "Raupe", correct: false },
    ],
  },
  {
    question: "Wie viel ist 1+1?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "7", correct: false },
      { text: "Deine Mutter", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question"); // HTML Elemente
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // 0, 1, 2, 3 das steht für die Fragen wobei 0 die erste Frage ist
let score = 0;

function startQuiz() {
  // Funktion die beim Start des Quiz ausgeführt wird
  currentQuestionIndex = 0;
  score = 0; // Score wird auf 0 gesetzt
  nextButton.innerHTML = "Next"; // Text des Buttons wird auf "Next" gesetzt
  showQuestion(); // Funktion wird ausgeführt
}

function showQuestion() {
  // Funktion die die Frage anzeigt
  resetState(); // Funktion wird ausgeführt
  let currentQuestion = questions[currentQuestionIndex]; // Variable die die aktuelle Frage speichert
  let questionNr = currentQuestionIndex + 1; // Variable die die Frage Nummer speichert
  questionElement.innerHTML = questionNr + ". " + currentQuestion.question; // Frage wird angezeigt

  currentQuestion.answers.forEach((answer) => {
    // Für jede Antwort wird folgendes ausgeführt
    const button = document.createElement("button"); // Ein Button wird erstellt
    button.innerHTML = answer.text; // Text des Buttons wird auf den Text der Antwort gesetzt
    button.classList.add("btn"); // Dem Button wird die Klasse "btn" hinzugefügt
    answerButtons.appendChild(button); // Der Button wird dem answerButtons Element hinzugefügt
    if (answer.correct) {
      // Wenn die Antwort richtig ist wird folgendes ausgeführt
      button.dataset.correct = answer.correct; // Dem Button wird ein Attribut hinzugefügt
    }
    button.addEventListener("click", selectAnswer); // Wenn der Button geklickt wird wird die Funktion selectAnswer ausgeführt
  });
}

function resetState() {
  nextButton.style.display = "none"; // Der Button wird ausgeblendet
  while (answerButtons.firstChild) {
    // Solange das answerButtons Element ein Kind hat wird folgendes ausgeführt
    answerButtons.removeChild(answerButtons.firstChild); // Das erste Kind wird entfernt
  }
}

function selectAnswer(e) {
  // Funktion die ausgeführt wird wenn eine Antwort ausgewählt wird
  const selectedButton = e.target; // Variable die den ausgewählten Button speichert
  const isCorrect = selectedButton.dataset.correct; // Variable die speichert ob die Antwort richtig ist
  if (isCorrect) {
    selectedButton.classList.add("correct"); // Dem Button wird die Klasse "correct" hinzugefügt
    score++; // Score wird um 1 erhöht
  } else {
    selectedButton.classList.add("incorrect"); // Dem Button wird die Klasse "incorrect" hinzugefügt
  }
  Array.from(answerButtons.children).forEach((button) => {
    // Für jeden Button wird folgendes ausgeführt
    if (button.dataset.correct === "true") {
      // Wenn die Antwort richtig ist wird folgendes ausgeführt
      button.classList.add("correct"); // Dem Button wird die Klasse "correct" hinzugefügt
    }
    button.disabled = true; // Der Button wird deaktiviert
  });
  nextButton.style.display = "block"; // Der Button wird angezeigt
}

function showScore() {
  resetState(); // Funktion wird ausgeführt
  questionElement.innerHTML =
    "Du hast " +
    score +
    " von " +
    questions.length +
    " Fragen richtig beantwortet."; // Score wird angezeigt
  nextButton.innerHTML = "Restart"; // Text des Buttons wird auf "Restart" gesetzt
  nextButton.style.display = "block"; // Der Button wird angezeigt
}

function handleNextButton() {
  currentQuestionIndex++; // currentQuestionIndex wird um 1 erhöht
  if (currentQuestionIndex < questions.length) {
    // Wenn es noch Fragen gibt wird folgendes ausgeführt
    showQuestion(); // Funktion wird ausgeführt
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  // Wenn der Button geklickt wird wird folgendes ausgeführt
  if (currentQuestionIndex < questions.length) {
    // Wenn es noch Fragen gibt wird folgendes ausgeführt
    handleNextButton(); // Funktion wird ausgeführt
    startQuiz();
  }
});

startQuiz(); // Funktion wird ausgeführt
