const guessInput  = document.getElementById('guess');
const submitBtn   = document.getElementById('submitBtn');
const resetBtn    = document.getElementById('resetBtn');
const messageEl   = document.getElementById('message');

let secretNumber;
let attempts;

// Initialise ou réinitialise le jeu
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  messageEl.textContent = 'Bonne chance !';
  guessInput.value = '';
  guessInput.disabled = false;
  submitBtn.disabled  = false;
}
  
// Vérifie la saisie de l'utilisateur
submitBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    messageEl.textContent = 'Entrez un nombre valide entre 1 et 100.';
    return;
  }
  attempts++;
  if (guess === secretNumber) {
    messageEl.textContent = `🎉 Bravo ! Tu as trouvé en ${attempts} essais.`;
    guessInput.disabled = true;
    submitBtn.disabled  = true;
  } else if (guess < secretNumber) {
    messageEl.textContent = 'Trop petit ! Essaie plus grand.';
  } else {
    messageEl.textContent = 'Trop grand ! Essaie plus petit.';
  }
});
  
// Bouton pour rejouer
resetBtn.addEventListener('click', startGame);

// Démarrage initial
startGame();
