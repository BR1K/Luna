import Spaceship from './spaceship'



class Game {

  constructor(ctx, canvas) {
    // debugger
    this.ctx = ctx;
    this.spaceship = new Spaceship(ctx);
    // this.draw = draw;
    this.canvas = canvas;
  }

  draw() {
    // debugger
    // console.log(this);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


    this.spaceship.drawSpaceship();

    requestAnimationFrame(this.draw);
  }


}

// Game.draw();



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
