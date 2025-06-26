const quizData = [
  {
    question: "Quel est le langage principalement utilisé pour styliser une page web ?",
    answers: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 1
  },
  {
    question: "Dans quelle direction le CSS s’applique-t-il dans le DOM ?",
    answers: [
      "De l’enfant vers le parent",
      "De bas en haut",
      "De haut en bas",
      "De droite à gauche"
    ],
    correct: 2
  },
  {
    question: "Quel opérateur permet de comparer l’égalité **strictement** en JavaScript ?",
    answers: ["=", "==", "===", "!=="],
    correct: 2
  },
  {
    question: "Lequel de ces types n’existe **pas** en JavaScript ?",
    answers: ["Number", "Boolean", "Character", "String"],
    correct: 2
  },
  {
    question: "Quel attribut HTML lie un script externe à la page ?",
    answers: ["href", "src", "link", "rel"],
    correct: 1
  }
];

let current = 0, score = 0;
const qEl            = document.getElementById('questionEl');
const btns           = document.querySelectorAll('.answerBtn');
const resultEl       = document.getElementById('resultEl');
const correctSound   = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');

function loadQuiz() {
  const q = quizData[current];
  qEl.textContent = q.question;
  btns.forEach((btn,i) => {
    btn.textContent = q.answers[i];
    btn.disabled = false;
  });
  resultEl.textContent = '';
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = +btn.dataset.index;
    if (idx === quizData[current].correct) {
      score++;
      resultEl.textContent = '✔️ Correct!';
      correctSound.currentTime = 0;
      correctSound.play();
    } else {
      resultEl.textContent = '❌ Faux!';
      incorrectSound.currentTime = 0;
      incorrectSound.play();
    }
    btns.forEach(b => b.disabled = true);
    setTimeout(() => {
      current++;
      if (current < quizData.length) {
        loadQuiz();
      } else {
        qEl.textContent = `Quiz terminé : ${score}/${quizData.length}`;
      }
    }, 1000);
  });
});

// Démarrage initial
loadQuiz();