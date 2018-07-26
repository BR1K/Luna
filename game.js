const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');



function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updateSpaceship();

  drawSpaceship();

  requestAnimationFrame(draw);
}


draw();
