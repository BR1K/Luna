import Game from './game';

class Spaceship {
  constructor(ctx, canvas) {

    this.friction = 0.5
    this.canvas = canvas;
    this.ctx = ctx;
    this.angle = 0;
    this.color = "lightgrey";
    this.width = 8; //8
    this.thrust = 0.07;
    this.height = 2; // 22
    this.gravity = .03
    this.velocity = {
      x: 0,
      y: 0
    }
    this.position = {
      x: 200,
      y: 0
    },
    this.thrusterOn = false;
    this.acceleration = 0;
    this.deceleration = 0;
    this.rotatingClockwise = false;
    this.rotatingCounterClockwise = false;

    this.fuel = 500000;
    this.landed = false;
    this.crashed = false;
  }

  drawSpaceship() {

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
      this.ctx.lineTo(0, this.height * 0.5 + Math.random() * 20);
      this.ctx.lineTo(this.width * -0.5, this.height * 0.5);
      this.ctx.closePath();
      this.ctx.fillStyle = "orange";
      this.ctx.fill();
    }

    this.ctx.restore();
  }


  updateSpaceship() {

    this.position.x += this.velocity.x;
    this.position.y -= this.velocity.y;
    //gravity + acceleration:
    this.velocity.y -= (this.gravity + .05);

    if (this.fuel === 0) {
      this.thrusterOn = false;
    }

    if (this.position.y + (this.height / 2) > this.canvas.height) {
      this.velocity.y = -this.velocity.y * this.friction;
    }

    if (this.thrusterOn) {
      if (this.thrust < .18) { // terminal velocity
        this.thrust += 0.003
      }
      this.velocity.x += this.thrust * (Math.sin(this.angle));
      this.velocity.y += this.thrust * (Math.cos(this.angle));
      this.fuel -= 0.5;


    }
    if (this.rotatingClockwise) {
      this.angle += ( Math.PI / 180);
    } else if (this.rotatingCounterClockwise) {
      this.angle -= (Math.PI / 180);
    }

  }

  keyPressed(event) {

    switch (event.keyCode) {
      case 37:
        this.rotatingCounterClockwise = true;
        break;
      case 39:

        this.rotatingClockwise = true;

        break;
      case 38:
        this.thrusterOn = true;
        break;
    }
  }


  keyUnPressed(event) {
    switch (event.keyCode) {
      case 37:
        this.rotatingCounterClockwise = false;
        break;
      case 39:
        this.rotatingClockwise = false;
        break;
      case 38:
        this.thrust = 0;
        this.thrusterOn = false;
        break;
    }
  }

}


export default Spaceship;
