import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    startBtn: document.querySelector('[data-start]')
}

const data = new Date();
refs.startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    let selectedDate = selectedDates[0] - data;
    if (selectedDates[0] < data)
            return (alert("Please choose a date in the future"));
        if (selectedDates[0] > data) {
            refs.startBtn.disabled = false;
      };
      refs.startBtn.addEventListener('click', onClick);
      
      function onClick() {
          const id = setInterval(() => { 
              selectedDate -= 1000;
             let result = convertMs(selectedDate)
              if (!result.seconds) {
                  clearInterval(id);
                  refs.startBtn.disabled = true;
              };
              console.log(selectedDate);
              console.log(result);
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