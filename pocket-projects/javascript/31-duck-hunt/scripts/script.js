// variables
const DUCK = document.querySelector('.duck');
const SCORE = document.querySelector('.score');
const SPEED = 1000;

// helper functions
const randomNum = (num) => Math.floor(Math.random() * num) + 1;

const randomMirror = () => {
    const mirror = Math.floor(Math.random() * 3) - 1;

    if (mirror == 0) {
        return randomMirror();
    } else {
        return mirror;
    }
}

// functions
const increaseScore = () => {
    const newScore = Number(SCORE.textContent) + 1;
    SCORE.innerHTML = newScore;
}

const moveDuck = () => {
    const w = window.innerWidth - 100;
    const h = window.innerHeight - 100;

    DUCK.style.left = randomNum(w) + 'px';
    DUCK.style.top = randomNum(h) + 'px';

    console.log(randomMirror());
    DUCK.style.transform = 'scaleX(' + randomMirror() + ')';
}

DUCK.addEventListener('click', () => {
    increaseScore();
    moveDuck();
});

setInterval(moveDuck, SPEED);