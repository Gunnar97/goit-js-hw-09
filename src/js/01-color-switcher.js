const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

let delay = 1000;
let timerId1;
refs.startBtn.addEventListener('click', onClick);

function onClick(eve) {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    
    timerId1 = setInterval(() => refs.body.style.backgroundColor = getRandomHexColor(), delay);
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };
};

refs.stopBtn.addEventListener('click', onStop);

function onStop(eve) {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(timerId1);
    
};






