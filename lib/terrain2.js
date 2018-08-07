class Terrain {

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.getTerrain = this.getTerrain.bind(this);
    this.drawTerrain = this.drawTerrain.bind(this);
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
    let seed = seed || {
      s: height / 2 + (Math.random() * displace * 2) - displace,
      e: height / 2 + (Math.random() * displace * 2) - displace
    };

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
    // debugger
    return points;
  }

  drawTerrain() {
    // debugger
    let terrain = this.getTerrain(this.width, this.height, (this.height / 4), 0.6);
    let terrain2 = this.getTerrain(this.width, this.height, (this.height / 4), 0.6, { s: terrain[terrain.length - 1], e: 0 });
    let offset = 0;

    this.ctx.clearRect(0, 0, this.width, this.height);
    offset -= 3;

    // draw first half:
    this.ctx.beginPath();
    this.ctx.moveTo(offset, terrain[0]);
    for (let i = 0; i < terrain.length; i++) {
      this.ctx.lineTo(i + offset, terrain[i]);
    }
    for (i = 0; i < terrain2.length; i++) {
      this.ctx.lineTo(this.width + offset + i, terrain2[i])
    }

    this.ctx.lineTo(this.width + this.offset + i, this.height);
    this.ctx.lineTo(offset, this.height);
    this.ctx.closePath();
    this.ctx.fill();

    if (terrain2.length - 1 + this.width + offset <= this.width) {
      terrain = terrain2;
      terrain2 = getTerrain(this.width, this.height, (this.height / 4), 0.6, { s: terrain[terrain.length - 1], e: 0 });
      offset = 0;
    }

  }
}

export default Terrain;
