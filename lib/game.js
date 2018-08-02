import Spaceship from './spaceship'
import Terrain from './terrain';
import Sky from './sky';

class Game {

  constructor(ctx, canvas, ctx2, canvas2) {

    this.ctx = ctx;
    this.spaceship = new Spaceship(ctx, canvas);
    this.terrain = new Terrain(ctx, canvas);
    this.sky = new Sky(ctx2, canvas2);
    this.ctx2 = ctx2;
    this.canvas2 = canvas2;
    this.canvas = canvas;
    // this.drawOnce = this.drawOnce.bind(this);
    this.draw1 = this.draw1.bind(this);
    this.draw2 = this.draw2.bind(this);
  }

  drawTerrain() {
    this.terrain.drawTerrain();
  }

  draw1() {

    // console.log(this);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.spaceship.drawSpaceship();
    this.spaceship.updateSpaceship();
    this.terrain.drawTerrain();


    requestAnimationFrame(this.draw1);


  }

  draw2() {

    // console.log(this);
    this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
    this.ctx2.save();
    this.sky.drawSky();

    requestAnimationFrame(this.draw2);


  }


  // drawOnce() {
  //
  //
  // }

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
