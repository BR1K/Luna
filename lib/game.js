import Spaceship from './spaceship'



class Game {
  constructor(ctx) {
    this.spaceship = new Spaceship(ctx);
    this.ctx = ctx;
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateSpaceship();

    this.spaceship.drawSpaceship();

    requestAnimationFrame(draw);
  }

}



export default Game;



// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//   updateSpaceship();
//
//   drawSpaceship();
//
//   requestAnimationFrame(draw);
// }
//
//
// draw();
