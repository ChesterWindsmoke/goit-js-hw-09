
// Знаходимо необхідні елементи
const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const bodyEL = document.querySelector('body');

let intervalId;

// Ф-ція зміни кольору body з інтервалом в 1 секунду
startButtonEl.addEventListener('click', () => {
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
  intervalId = setInterval (() =>
  bodyEL.style.backgroundColor = getRandomHexColor(),1000);   
});
// Ф-ція зупинки зміни кольору body
stopButtonEl.addEventListener('click', () => {
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
  clearInterval(intervalId);
});

// Ф-ція генерації рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}