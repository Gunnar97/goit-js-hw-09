const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
   
}

function activStop() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
};

function activStart() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}

export default {
    activStop,
    activStart,
    refs,
}