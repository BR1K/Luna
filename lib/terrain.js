class Terrain {

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.stepMax = 2.5;
    this.stepChange = 1.0;
    this.heightMax = this.canvas.height;

    this.height = Math.random() * this.heightMax;
    this.slope = (Math.random() * this.stepMax) * 2 - this.stepMax
  }

  drawTerrain() {
    for (let i = 0; i < this.canvas.width; i++) {
      this.height += this.slope;
      this.slope += (Math.random() * this.stepChange) * 2 - this.stepChange

      if (this.slope > this.heightMax) {
        this.slope = this.stepMax;
      }
      if (this.slope < -this.stepMax) {
        this.slope = -this.stepMax;
      }

      if (this.height > this.heightMax) {
        
      }
    }
  }


}

export default Terrain;
