// Знаходимо всі необхідні елементи
const submitButtonEl = document.querySelector('button[type="submit"]');
const amountEl = document.querySelector('[name="amount"]');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const formEl = document.querySelector('.form');

let step = 0;
const delay = firstDelay.value;
delayStep.value = step;
const isSuccess = true; 
const position = position;

formEl.addEventListener('submit', (event) => {
  event.preventDefault(); // Зупиняємо дію за замовчуванням форми
  const position = position; /* отримуємо значення позиції */
  const delay = firstDelay.value;/* отримуємо значення затримки */
  createPromise(position, delay);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve(position);
    } else {
      reject(position);
    }
  }, delay);
});

// Функція обробки промісів
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    promise
      .then((resolvedPosition) => {
        console.log(`✅ Fulfilled promise ${resolvedPosition} in ${delay}ms`);
      })
      .catch((rejectedPosition) => {
        console.log(`❌ Rejected promise ${rejectedPosition} in ${delay}ms`);
      });
  } else {
    // Reject
    promise
      .catch((rejectedPosition) => {
        console.log(`❌ Rejected promise ${rejectedPosition} in ${delay}ms`);
      });
  }
}
