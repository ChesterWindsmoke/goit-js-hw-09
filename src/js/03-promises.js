import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  // Отримуємо значення полів форми
  const delay = parseInt(formEl.elements.delay.value);
  const step = parseInt(formEl.elements.step.value);
  const amount = parseInt(formEl.elements.amount.value);

  let nextDelay = delay;

  for (let position = 1; position <= amount; position++) {
    createPromise(position, nextDelay);
    nextDelay += step;
  }
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

