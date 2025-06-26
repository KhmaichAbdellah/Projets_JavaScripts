// Sélection de l'élément horloge
const clockEl = document.getElementById('clock');

// Fonction pour mettre à jour l'heure
function updateClock() {
  const now = new Date();
  // Format HH:MM:SS
  const hours   = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}

// Mise à jour toutes les secondes
setInterval(updateClock, 1000);

// Initialisation immédiatement
updateClock();
