const score = document.querySelector(".score");
const start = document.querySelector(".start");
const gameArea = document.querySelector(".gameArea");
const car = document.createElement("div");

car.classList.add("car");


const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};
const setting = {
    start: false,
    score: 0,
    speed: 3
};
const playGame = () => {
    if (setting.start) {
        requestAnimationFrame(playGame);
    };
};
const startGame = () => {
    start.classList.add("hide");
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

const startRun = (e) => {
    e.preventDefault();
    keys[e.key] = true;
}
const stopRun = (e) => {
    e.preventDefault();
    keys[e.key] = false;
}




start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

