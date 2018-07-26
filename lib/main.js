import Game from './game.js';

document.addEventListener("DOMContentLoaded", () => {
  // debugger
  // console.log("hi");
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx, canvas);
  // debugger
  game.draw();
});
