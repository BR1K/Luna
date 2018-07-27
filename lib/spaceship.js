import Game from './game';

class Spaceship {
  constructor(ctx) {
    // debugger
    this.ctx = ctx;
    this.angle = 0;
    this.color = "black";
    this.width = 19; //8
    this.thrust = 0;
    this.height = 40; // 22
    this.gravity = .01
    this.velocity = {
      x: 0,
      y: 0
    }
    this.position = {
      x: 0,
      y: 0
    },
    this.thrusterOn = false;
    this.acceleration = 0;
    this.deceleration = 0;
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
      this.ctx.lineTo(0, this.height * 0.5 + Math.random() * 20);
      this.ctx.lineTo(this.width * -0.5, this.height * 0.5);
      this.ctx.closePath();
      this.ctx.fillStyle = "orange";
      this.ctx.fill();
    }

    this.ctx.restore();
  }


  updateSpaceship() {
    // const gravity = 0.01;

    this.position.x += this.velocity.x;
    this.position.y -= this.velocity.y;

    if (this.rotatingClockwise) {
      this.angle += ( Math.PI / 180);
    } else if (this.rotatingCounterClockwise) {
      this.angle -= (Math.PI / 180);
    }

    if (this.thrusterOn) {
      // this.thrust += 0.05;
      // debugger
      // this.position.x += Math.sin(this.angle);
      // this.position.y -= Math.cos(this.angle);
      this.velocity.x += this.thrust * Math.sin(this.angle);
      this.velocity.y += this.thrust * Math.cos(this.angle);
      this.velocity.y -= this.gravity;
      // debugger
    // } else {
    //   this.thrust -= 0.5;
    }
    // gravitational pull:
    this.velocity.y -= this.gravity;
    // this.velocity.x -= this.gravity;
  }

  keyPressed(event) {
    // debugger
    switch (event.keyCode) {
      case 37:
        this.rotatingCounterClockwise = true;
        break;
      case 39:
        this.rotatingClockwise = true;
        break;
      case 38:
        this.thrusterOn = true;
        if (this.thrust < 1) {
          this.thrust += 0.05
        }
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
        this.thrusterOn = false;
        if (this.thrust > 0) {
          this.thrust -= 0.05
        }
        break;
    }
  }

}


export default Spaceship;
