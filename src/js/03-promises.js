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

  for (let i = 1; i <= Number(refs.amount.value); i++) {
    let faktDaley = Number(refs.delay.value) + (i - 1) * Number(refs.step.value);
    setTimeout(createPromise, faktDaley, i, faktDaley)
  };

  refs.form.reset();
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  }
  else {
   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  };
};