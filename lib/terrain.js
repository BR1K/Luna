class Terrain {

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.stepMax = 2.5;
    this.stepChange = 1.0;
    this.maxHeight = this.canvas.height;

    this.height = Math.random() * this.maxHeight;
    this.slope = (Math.random() * this.stepMax) * 2 - this.stepMax

    this.drawTerrain = this.drawTerrain.bind(this);
  }

  drawTerrain() {
    for (let i = 0; i < this.canvas.width; i++) {
      this.height += this.slope;
      this.slope += (Math.random() * this.stepChange) * 2 - this.stepChange

      if (this.slope > this.maxHeight) {
        this.slope = this.stepMax;
      }
      if (this.slope < -this.stepMax) {
        this.slope = -this.stepMax;
      }

      if (this.height > this.maxHeight) {
        this.height = this.maxHeight;
        this.slope *= -1;
      }
      if (this.height < 0) {
        this.height = 0;
        this.slope *= -1;
      }

      this.ctx.beginPath();
      this.ctx.moveTo(i, this.maxHeight);
      this.ctx.lineTo(i, this.height);
      this.ctx.stroke();
    }
  }


}

export default Terrain;
