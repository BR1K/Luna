import Spaceship from './spaceship'
// import Terrain from './terrain';
import Terrain from './terrain2';
import Sky from './sky';

class Game {

  constructor(ctx, canvas, ctx2, canvas2, ctx3, canvas3) {

    this.ctx = ctx;
    this.terrain = new Terrain(ctx3, canvas3);
    this.spaceship = new Spaceship(ctx, canvas, this.terrain);
    this.sky = new Sky(ctx2, canvas2);
    this.ctx2 = ctx2;
    this.canvas2 = canvas2;
    this.canvas = canvas;
    this.ctx3 = ctx3;
    this.canvas3 = canvas3;
    this.draw3 = this.draw3.bind(this);
    this.draw1 = this.draw1.bind(this);
    this.draw2 = this.draw2.bind(this);
  }

  // drawTerrain() {
  //   this.terrain.drawTerrain();
  // }

  draw1() {
    // console.log(this);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.spaceship.drawSpaceship();
    this.spaceship.updateSpaceship();


    requestAnimationFrame(this.draw1);


  }

  draw2() {

    // console.log(this);
    this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
    this.ctx2.save();
    this.sky.drawSky();

    requestAnimationFrame(this.draw2);


  }


  draw3() {
    this.ctx3.clearRect(0, 0, this.ctx3.width, this.ctx3.height);
    this.terrain.drawTerrain();
    // this.terrain.drawFloor();

    requestAnimationFrame(this.draw3);
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
