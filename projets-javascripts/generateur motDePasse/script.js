const lengthInput   = document.getElementById('length');
const generateBtn   = document.getElementById('generateBtn');
const passwordEl    = document.getElementById('password');

// Jeu de caractères possibles
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:"<>?|[];\',./`~';

// Fonction pour générer un mot de passe aléatoire
function generatePassword(len) {
  let pass = '';
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * chars.length);
    pass += chars[index];
  }
  return pass;
}

// Événement sur le bouton
generateBtn.addEventListener('click', () => {
  const length = parseInt(lengthInput.value, 10);
  if (isNaN(length) || length < 4) {
    passwordEl.textContent = 'Veuillez entrer une longueur ≥ 4';
    return;
  }
  passwordEl.textContent = generatePassword(length);
});
