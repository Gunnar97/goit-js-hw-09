import buttonStat from './helper';

const body = document.querySelector('body')

let delay = 1000;
let timerId1;
buttonStat.refs.startBtn.addEventListener('click', onClick);

function onClick(eve) {
    buttonStat.activStop();
    timerId1 = setInterval(() => body.style.backgroundColor = getRandomHexColor(), delay);
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };
};

buttonStat.refs.stopBtn.addEventListener('click', onStop);

function onStop(eve) {
    buttonStat.activStart();
    clearInterval(timerId1);
    
};






