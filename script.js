const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');

let score = 0;
let timeLeft = 30;
let gameTimer;
let moleTimer;

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    const hole = randomHole();
    console.log("Hole", hole)
    const mole = hole.querySelector('.mole');
    mole.classList.add('up');

    mole.onclick = () => {
        score++;
        scoreDisplay.textContent = score;
        mole.classList.remove('up');
        mole.onclick = null;
    };

    setTimeout(() =>{
        mole.classList.remove('up');
        mole.onclick = null;
    }, 1000);
}

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textCnotent = score;
    timeDisplay.textContent = timeLeft;

    clearInterval(gameTimer);
    clearInterval(moleTimer);

    moleTimer = setInterval(showMole, 800);

    gameTimer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameTimer);
            clearInterval(moleTimer);
            alert(`Game Over! Your score is ${score}.`);
        }
    }, 1000);
}

startButton.onclick = startGame;