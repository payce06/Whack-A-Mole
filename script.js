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
