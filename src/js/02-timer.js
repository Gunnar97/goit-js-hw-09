import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";



const refs = {
    body: document.querySelector('body'),
    inputTime: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timerBox: document.querySelector('.timer'),
    velueTimerDay: document.querySelector('[data-days]'),
    velueTimerHours: document.querySelector('[data-hours'),
    velueTimerMinutes: document.querySelector('[data-minutes]'),
    velueTimerSeconds: document.querySelector('[data-seconds]')
}




refs.startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    let selectedDate = selectedDates[0];
      if (selectedDates[0] < new Date()) {
      Notiflix.Report.failure("Please choose a date in the future");
       return
      };
        
        if (selectedDates[0] > new Date()) {
          refs.startBtn.disabled = false;
          
      };
        refs.startBtn.addEventListener('click', onClick);
        
        function onClick() {
          refs.startBtn.disabled = true;
          refs.startBtn.classList.add('disabled')
          refs.inputTime.disabled = true;

          const id = setInterval(() => { 
            let timeDif = selectedDate - new Date();
            let result = convertMs(timeDif);
            
            if (timeDif >= 0) {
               refs.velueTimerDay.textContent = addLeadingZero(result.days);
               refs.velueTimerHours.textContent = addLeadingZero(result.hours);
              refs.velueTimerMinutes.textContent = addLeadingZero(result.minutes);
              refs.velueTimerSeconds.textContent = addLeadingZero(result.seconds);
            } 
              else {
                clearInterval(id);
                refs.inputTime.disabled = true;
                Notiflix.Report.info('Please refresh the page!');
                
            };
          }, 1000)
          }  
      }
        
  };

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}