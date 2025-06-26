const tempInput   = document.getElementById('temperature');
const unitSelect  = document.getElementById('unit');
const convertBtn  = document.getElementById('convertBtn');
const resultEl    = document.getElementById('result');

// Fonction de conversion
function convertTemperature(value, direction) {
  if (direction === 'CtoF') {
    return (value * 9 / 5) + 32;
  } else {
    return (value - 32) * 5 / 9;
  }
}

// Événement sur le bouton
convertBtn.addEventListener('click', () => {
  const temp = parseFloat(tempInput.value);
  if (isNaN(temp)) {
    resultEl.textContent = 'Veuillez entrer un nombre valide !';
    return;
  }
  const direction = unitSelect.value;
  const converted = convertTemperature(temp, direction);
  const rounded  = Math.round(converted * 100) / 100;
  if (direction === 'CtoF') {
    resultEl.textContent = `${temp}°C = ${rounded}°F`;
  } else {
    resultEl.textContent = `${temp}°F = ${rounded}°C`;
  }
});
