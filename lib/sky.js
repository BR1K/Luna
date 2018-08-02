class Sky {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.color = "#000";
    // this.color = "rgba(0, 0, 0, 0)"
    this.canvas = canvas;
    this.stars = [];
    this.numStars = 500;
    this.speed = 25;

    this.drawStar = this.drawStar.bind(this);
    this.drawSky = this.drawSky.bind(this);
    this.makeStar = this.makeStar.bind(this);

    for(let i = 0; i < this.numStars; i++) {
      this.stars[i] = this.makeStar();
    }
  }

  makeStar() {
    return {
      x: Math.random() * 1,
      y: Math.random() * 1,
      distance: Math.sqrt(Math.random() / 7),
      color: 'hsl('+Math.random()*40+',100%,'+(70+Math.random()*30)+'%)'
    };
  }

  drawStars() {
    for (let i = 0; i < this.numStars; i++) {
      let star = this.stars[i];
      this.stars[i].x -= Math.pow(this.stars[i].distance, 2) / this.canvas.width * this.speed;
      if (this.stars[i].x <= 0) {
        this.stars[i] = this.makeStar();
        this.stars[i].x = 1;
      }

      this.drawStar(this.stars[i]);
    }
  }

  drawStar(star) {

    let x = star.x * this.canvas.width;
    let y = star.y * this.canvas.height;
    let z = star.distance * 2;
    this.ctx.beginPath();
    this.ctx.arc(x, y, z, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = star.distance * 4;
    this.ctx.strokeStyle='rgba(255,255,255,0.2)';
    this.ctx.stroke();
    this.ctx.fillStyle = star.color;
    this.ctx.fill();
  }

  drawSky() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawStars();
  }

}
export default Sky;
