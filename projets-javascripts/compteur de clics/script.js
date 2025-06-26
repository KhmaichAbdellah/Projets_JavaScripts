// Sélection des éléments
const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn     = document.getElementById('resetBtn');

let count = 0;

// Incrémente le compteur et met à jour l'affichage
incrementBtn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});

// Réinitialise le compteur à zéro
resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});
