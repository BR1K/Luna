class Terrain {

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.stepMax = 2.5;
    this.stepChange = 1.0;
    this.heightMax = (this.canvas.height);
    this.height = Math.random() * (this.heightMax);
    this.slope = (Math.random() * this.stepMax) * 2 - this.stepMax
    this.randArr = [];

    this.drawTerrain = this.drawTerrain.bind(this);
  }

  drawTerrain() {
    if(this.randArr.length > 0){
      for (let i = 0; i < this.canvas.width; i++) {
        this.height += this.slope;
        this.slope += (this.randArr[i] * this.stepChange) * 2 - this.stepChange

        if (this.slope > this.heightMax) {
          this.slope = this.stepMax;
        }
        if (this.slope < -this.stepMax) {
          this.slope = -this.stepMax;
        }

        if (this.height > this.heightMax) {
          this.height = this.heightMax;
          this.slope /= -1;
        }
        if (this.height < 0) {
          this.height = 0;
          this.slope *= -1;
        }

        this.ctx.beginPath();
        this.ctx.moveTo(i, this.heightMax);
        this.ctx.lineTo(i, this.height);
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
      }
    } else {
      for (let i = 0; i < this.canvas.width; i++) {

        let random = Math.random();
        this.randArr.push(random);

        this.height += this.slope;
        this.slope += (random * this.stepChange) * 2 - this.stepChange

        if (this.slope > this.heightMax) {
          this.slope = this.stepMax;
        }
        if (this.slope < -this.stepMax) {
          this.slope = -this.stepMax;
        }

        if (this.height > this.heightMax) {
          this.height = this.heightMax;
          this.slope *= -1;
        }
        if (this.height < 0) {
          this.height = 0;
          this.slope *= -1;
        }

        this.ctx.beginPath();
        this.ctx.moveTo(i, this.heightMax);
        this.ctx.lineTo(i, this.height);
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
      }
    }
  }


}

export default Terrain;
