// 1.Повісити слухача подій на кнопку start
// 2.Відслідкувати подію кліку по кнопкці та передати
// як колбек ф - цію наш генератор рандомного кольору боді
// 3.Зробити перевірку якщо кнопка запущена , в цей момент вона не активна
// 4.Повісити слухача подій на кнопку stop
// 5.По кліку передати колбек ф-цію яка зупиняю зміну кольору 

// Знаходимо необхідні елементи
const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const bodyEL = document.querySelector('body');

startButtonEl.addEventListener('click', () => {
  bodyEL.style.backgroundColor = getRandomHexColor();   
});










// Ф-ція генерації рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}