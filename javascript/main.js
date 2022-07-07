// Main solo será para manejo de estados y manipulacion de DOM
// * GLOBAL VARIABLES

// seccion de canvas y ctx
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// elementos de DOM
const splashScreenDOM = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("intentando inicar el juego");
  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";

  // ... aqui es donde deberia iniciar el juego.
  const game = new Game()
  console.log(game)
  game.gameLoop()
};

// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);

// addeventlistener para manejar el pollo.  