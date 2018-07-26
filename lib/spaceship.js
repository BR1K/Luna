import Game from './game';

class Spaceship {
  constructor(ctx) {
    // debugger
    this.ctx = ctx;
    this.width = 19; //8
    this.height = 40; // 22
    this.color = "black";
    this.position = {
      x: 0,
      y: 0
    },
    this.angle = 0;
    this.thrusterOn = false;
    this.rotatingClockwise = false;
    this.rotatingCounterClockwise = false;
  }

  drawSpaceship() {
    // debugger
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.rotate(this.angle);
    this.ctx.rect(this.width * -0.5, this.height * -0.5, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();

    if (this.thrusterOn) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.width * -0.5, this.height * 0.5);
      this.ctx.lineTo(this.width * 0.5, this.height * 0.5);
      this.ctx.lineTo(0, this.height * 0.5 + Math.random() * 5);
      this.ctx.lineTo(this.width * -0.5, this.height * 0.5);
      this.ctx.closePath();
      this.ctx.fillStyle = "orange";
      this.ctx.fill();
    }

    this.ctx.restore();
  }

  updateSpaceship() {
    if (this.rotatingClockwise) {
      this.angle += Math.PI / 180;
    } else if (this.rotatingCounterClockwise) {
      this.angle -= Math.PI / 180;
    }

    if (this.thrusterOn) {
      this.position.x += Math.sin(this.angle);
      this.position.y -= Math.cos(this.angle);
    }
  }



}

export default Spaceship;
