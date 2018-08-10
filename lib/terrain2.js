class Terrain {

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height + 200;

    this.getTerrain = this.getTerrain.bind(this);
    this.drawTerrain = this.drawTerrain.bind(this);
    this.terrain = this.getTerrain(this.width, this.height, (this.height / 4), 0.6);
    this.terrain2 = this.getTerrain(this.width, this.height, (this.height / 4), 0.6, { s: this.terrain[this.terrain.length - 1], e: 0 });
    this.offset = 0;
  }

  // dislpace: change distance a point can go

  // NOTE: without seed: ////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // getTerrain(width, height, displace, detail) {
  //   let points = [];
  //   let power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))))
  //
  //   points[0] = height / 1.43 + (Math.random() * displace * 2) - displace;
  //   points[power] = height / 1.43 + (Math.random() * displace * 2) - displace;
  //   displace *= detail;
  //
  //   for (let i = 1; i < power; i *= 2) {
  //     for (let j = (power / i) / 2; j < power; j += power / i) {
  //       points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2);
  //       points[j] += (Math.random() * displace * 2) - displace;
  //     }
  //
  //     displace *= detail;
  //   }
  //   // console.log(points);
  //   // debugger
  //   return points;
  // }
  //
  // drawTerrain() {
  //   // debugger
  //   let terrain = this.getTerrain(this.width, this.height, (this.height / 4), 0.6);
  //
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(0, terrain[0]);
  //   for (let i = 1; i < terrain.length; i++) {
  //     this.ctx.lineTo(i, terrain[i]);
  //   }
  //   this.ctx.lineTo(this.width, this.height);
  //   this.ctx.lineTo(0, this.height);
  //   this.ctx.closePath();
  //   this.ctx.fillStyle = "grey";
  //   this.ctx.fill();
  // }

  // drawFloor() {
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(0, 500);
  //   this.ctx.lineTo(this.canvas.width, 500);
  //   this.ctx.stroke();
  //   this.ctx.strokeStyle = "white";
  //   this.ctx.closePath();
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // NOTE: with seed:

  getTerrain(width, height, displace, detail, seed) {
    let points = [];
    let power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))))
    // let seed = seed || {
    //   s: height / 2 + (Math.random() * displace * 2) - displace,
    //   e: height / 2 + (Math.random() * displace * 2) - displace
    // };
    if (!seed) {
      seed = {
        s: height / 2 + (Math.random() * displace * 2) - displace,
        e: height / 2 + (Math.random() * displace * 2) - displace
      };
    }

    // set start point:
    if (seed.s === 0) {
      seed.s = height / 2 + (Math.random() * displace * 2) - displace;
    }
    points[0] = seed.s;

    // set end point:
    if (seed.e === 0) {
      seed.e = height / 2 + (Math.random() * displace * 2) - displace
    }
    points[power] = seed.e;

    displace *= detail;

    for (let i = 1; i < power; i *= 2) {
      for (let j = (power / i) / 2; j < power; j += power / i) {
        points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2);
        points[j] += (Math.random() * displace * 2) - displace;
      }

      displace *= detail;
    }
    // console.log(points);
    debugger
    return points;
  }

  getPointsArr() {

  }

  drawTerrain() {
    // debugger

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.offset -= 3;

    // draw first half:
    this.ctx.beginPath();
    this.ctx.moveTo(this.offset, this.terrain[0]);
    for (var t = 0; t < this.terrain.length; t++) {
      this.ctx.lineTo(t + this.offset, this.terrain[t]);
    }
    for (t = 1; t < this.terrain2.length; t++) {
      this.ctx.lineTo(this.width + this.offset + t, this.terrain2[t])
    }

    this.ctx.lineTo(this.width + this.offset + t, this.height);
    this.ctx.lineTo(this.offset, this.height);
    this.ctx.closePath();
    this.ctx.fillStyle = "grey";
    this.ctx.fill();

    if (this.terrain2.length - 1 + this.width + this.offset <= this.width) {
      debugger
      this.terrain = this.terrain2;
      this.terrain2 = this.getTerrain(this.width, this.height, (this.height / 4), 0.6, { s: this.terrain[this.terrain.length - 1], e: 0 });
      this.offset = 0;
    }
    // requestAnimationFrame(this.drawTerrain);
  }
}

export default Terrain;
