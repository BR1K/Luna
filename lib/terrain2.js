class Terrain {

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.getTerrain = this.getTerrain.bind(this);
    this.drawTerrain = this.drawTerrain.bind(this);
  }

  getTerrain(width, height, displace, detail) {
    let points = [];
    let power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))))

    points[0] = height / 1.43 + (Math.random() * displace * 2) - displace;
    points[power] = height / 1.43 + (Math.random() * displace * 2) - displace;
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

    this.ctx.beginPath();
    this.ctx.moveTo(0, terrain[0]);
    for (let i = 1; i < terrain.length; i++) {
      this.ctx.lineTo(i, terrain[i]);
    }
    this.ctx.lineTo(this.width, this.height);
    this.ctx.lineTo(0, this.height);
    this.ctx.closePath();
    this.ctx.fillStyle = "grey";
    this.ctx.fill();
  }

  // drawFloor() {
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(0, 500);
  //   this.ctx.lineTo(this.canvas.width, 500);
  //   this.ctx.stroke();
  //   this.ctx.strokeStyle = "white";
  //   this.ctx.closePath();
  // }

}

export default Terrain;
