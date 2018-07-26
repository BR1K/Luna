import Game from './game';



class Spaceship {
  constructor(ctx) {
    this.color = "black";
    this.width = 8;
    this.height = 22;
    this.position = {
      x: 0,
      y: 0
    },
    this.angle = 0;
    this.thrusterOn = false;
    this.rotatingClockwise = false;
    this.rotatingCounterClockwise = false;
    this.ctx = ctx;
  }

  drawSpaceship() {
    
  }
}

export default Spaceship;
