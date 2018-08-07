import Game from './game';

class Spaceship {
  constructor(ctx, canvas, terrain) {

    this.terrain = terrain;
    this.friction = 0.5
    this.canvas = canvas;
    this.ctx = ctx;
    this.angle = 45;
    this.color = "lightgrey";
    this.width = 16; //8
    this.thrust = 0.07;
    this.height = 40; // 22
    this.gravity = .03
    this.velocity = {
      x: 0,
      y: 0
    }
    this.position = {
      x: 200,
      y: 0
    },
    this.points = {
      nw: {},
      ne: {},
      sw: {},
      se: {},
    },
    this.thrusterOn = false;
    this.acceleration = 0;
    this.deceleration = 0;
    this.rotatingClockwise = false;
    this.rotatingCounterClockwise = false;

    this.fuel = 500000;
    this.landed = false;
    this.crashed = false;

    this.getTopMid = this.getTopMid.bind(this);
    this.getBotMid = this.getBotMid.bind(this);
    this.getCorners = this.getCorners.bind(this);
    this.getLowestPoint = this.getLowestPoint.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
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

  // arr[x] == ship.pos.y

  checkCollision() {
    let width = this.canvas.width;
    let height = this.canvas.height;
    let displace = height / 4;
    let detail = 0.6;

    let points = this.terrain.getTerrain(width, height, displace, detail);
    let lowestPoint = this.getLowestPoint();
    let i = Math.floor(lowestPoint.x);
    debugger
    if (lowestPoint.y >= points[i]) {
      console.log("omg");
    }
  }


  updateSpaceship() {
    // if (this.position.y = 500) {
    //   this.velocity.y = 0;
    //   this.gravity = 0
    //   debugger
    // }
    debugger
    this.getCorners();
    this.checkCollision();

    this.position.x += this.velocity.x;
    this.position.y -= this.velocity.y;
    //gravity + acceleration:
    this.velocity.y -= (this.gravity + .03);

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

  //calculating ship's 4 points:
  //////////////////////////////////////////////////////////////////////////////
  getTopMid(cos, sin) {
    return {
      x : this.position.x + sin * this.height / 2,
      y : this.position.y - cos * this.height / 2
    }
  }

  getBotMid(cos, sin) {
    return {
      x : this.position.x - sin * this.height / 2,
      y : this.position.y + cos * this.height / 2
    }
  }

  getCorners() {
    const sin = Math.sin(this.angle);
    const cos = Math.cos(this.angle);
    const topMid = this.getTopMid(cos, sin);
    const botMid = this.getBotMid(cos, sin);

    this.points.nw = {
      x: topMid.x - (cos * this.width / 2),
      y: topMid.y - (sin * this.width / 2)
    }
    this.points.ne = {
      x: topMid.x + (cos * this.width / 2),
      y: topMid.y + (sin * this.width / 2)
    }
    this.points.sw = {
      x: botMid.x - (cos * this.width / 2),
      y: botMid.y - (sin * this.width / 2)
    }
    this.points.se = {
      x: botMid.x + (cos * this.width / 2),
      y: botMid.y + (sin * this.width / 2)
    }
  }
  // //////////////////////////////////////////////////////////////////////////////
  getLowestPoint() {
    debugger
    let lowestPoint = { x: 0, y: 0 };

    for (let corner in this.points) {
      if (this.points[corner].y > lowestPoint.y) {
        lowestPoint.x = this.points[corner].x;
        lowestPoint.y = this.points[corner].y;
      }
    }

    return lowestPoint
  }


}


export default Spaceship;
