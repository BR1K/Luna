import Spaceship from './spaceship'
import Terrain from './terrain';
import Sky from './sky';

class Game {

  constructor(ctx, canvas) {
    // debugger
    this.ctx = ctx;
    this.spaceship = new Spaceship(ctx, canvas);
    this.terrain = new Terrain(ctx, canvas);
    this.sky = new Sky(ctx, canvas);

    this.canvas = canvas;
    this.draw = this.draw.bind(this);

  }



  draw() {
    // debugger
    // console.log(this);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.sky.drawSky();
    this.terrain.drawTerrain();
    this.spaceship.drawSpaceship();
    this.spaceship.updateSpaceship();




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
