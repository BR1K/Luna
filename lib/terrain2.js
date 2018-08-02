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
    let power = Math.pow(2, Math.log(width) / Math.log(2))

  }

  drawTerrain() {

  }


}

export default Terrain;
