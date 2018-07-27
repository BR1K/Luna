import Game from './game.js';
import Spaceship from './spaceship';

document.addEventListener("DOMContentLoaded", () => {
  // debugger
  // console.log("hi");
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx, canvas);
  // debugger
  document.addEventListener('keydown', e => game.spaceship.keyPressed(e));
  document.addEventListener('keyup', e => game.spaceship.keyUnPressed(e));
  game.draw();
});
