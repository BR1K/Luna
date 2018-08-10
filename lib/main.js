import Game from './game.js';
// import Spaceship from './spaceship';
import Terrain from './terrain2';

document.addEventListener("DOMContentLoaded", () => {

  // console.log("hi");
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext('2d');

  const canvas2 = document.getElementById("background");
  const ctx2 = canvas2.getContext('2d');

  const canvas3 = document.getElementById("background2");
  const ctx3 = canvas3.getContext('2d');

  const terrain = new Terrain(ctx3, canvas3);

  const game = new Game(ctx, canvas, ctx2, canvas2, ctx3, canvas3);

  document.addEventListener('keydown', e => game.spaceship.keyPressed(e));
  document.addEventListener('keyup', e => game.spaceship.keyUnPressed(e));
  // game.drawTerrain();
  terrain.drawTerrain();
  game.draw3();
  game.draw1();
  game.draw2();
});
