// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Notiflix замість alert
import Notiflix from 'notiflix';

// Знаходимо всі необхідіні елементи
const inputEl = document.getElementById('datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const buttonEl = document.querySelector('[data-start]');
// Додаткові опції бібліотеки
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
// Викликаємо ф-цію підключеної бібліотеки
flatpickr(inputEl, options);

let timerInterval = null; // Змінна для збереження інтервалу таймера

// Ф-ція яка віднімає від обраного часу поточний час, 
// як результат отримуємо скільки часу залишилось відрахувати до обраної дати
const handleTime = () => {
  const now = new Date();
  const selectedDates = inputEl._flatpickr.selectedDates;

  if (selectedDates[0] <= now) {
    buttonEl.disabled = true;
    Notiflix.Notify.failure('Please choose a date in the future');

  } else {
    buttonEl.disabled = timerInterval !== null; // Забороняємо кнопку "Start", якщо таймер запущений

    const ms = selectedDates[0] - now;
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }
};

// Початкове налаштування кнопки "Start"
buttonEl.disabled = true;

// Перевірка на активність кнопки після вибору дати
inputEl.addEventListener('change', () => {
  handleTime();
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}

buttonEl.addEventListener('click', () => {
  if (timerInterval === null) { // Перевіряємо, чи таймер ще не запущений
    buttonEl.disabled = true; // Забороняємо кнопку "Start"
    handleTime(); // Оновлюємо значення часу перед запуском таймера
    timerInterval = setInterval(() => {
      handleTime();
      if (convertMs(ms).seconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        buttonEl.disabled = false; // Робимо кнопку "Start" знову активною
      }
    }, 1000);
  }
});

function addLeadingZero(value) {
 return String(value).padStart(2, '0');
}



