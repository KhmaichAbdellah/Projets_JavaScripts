const birthInput = document.getElementById('birthdate');
const startBtn   = document.getElementById('startBtn');
const displayEl  = document.getElementById('ageDisplay');
let intervalId;

// Pour empêcher de choisir une date future
const todayISO = new Date().toISOString().split('T')[0];
birthInput.setAttribute('max', todayISO);

function updateAge(birthDate) {
  const now = new Date();
  let diff = now - birthDate; // différence en ms

  // Calcul des unités
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour   = msInMinute * 60;
  const msInDay    = msInHour * 24;

  // Jours totaux pour calcul mois/années
  const daysTotal   = Math.floor(diff / msInDay);
  const years       = Math.floor(daysTotal / 365.2425);
  const daysRem     = daysTotal - Math.floor(years * 365.2425);
  const months      = Math.floor(daysRem / 30.436875);
  const days        = daysRem - Math.floor(months * 30.436875);

  // Heures, minutes, secondes restantes
  diff -= daysTotal * msInDay;
  const hours   = Math.floor(diff / msInHour);
  diff -= hours * msInHour;
  const minutes = Math.floor(diff / msInMinute);
  diff -= minutes * msInMinute;
  const seconds = Math.floor(diff / msInSecond);

  displayEl.textContent =
    `${years} ans, ${months} mois, ${days} j, ` +
    `${hours} h, ${minutes} m, ${seconds} s`;
}

startBtn.addEventListener('click', () => {
  const bd = new Date(birthInput.value);
  if (isNaN(bd.getTime())) {
    displayEl.textContent = 'Veuillez sélectionner une date valide.';
    return;
  }
  clearInterval(intervalId);
  updateAge(bd);
  intervalId = setInterval(() => updateAge(bd), 1000);
});
