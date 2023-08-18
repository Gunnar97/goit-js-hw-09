import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[ name="amount"]')
};


refs.form.addEventListener('submit', onSubmit);

function onSubmit(eve) {
  eve.preventDefault();
  for (let i = 1; i < refs.amount.value; i++) {
   const id = setInterval()
    
  }
}





function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve()
  } else {
    reject()
  }
};

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
