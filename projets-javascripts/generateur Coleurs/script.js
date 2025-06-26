const colorCodeEl = document.getElementById('colorCode');
const btn         = document.getElementById('generateBtn');

function getRandomHex() {
  const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  return '#' + hex.padStart(6, '0');
}

btn.addEventListener('click', () => {
  const color = getRandomHex();
  colorCodeEl.textContent = color;
  document.body.style.backgroundColor = color;
});
