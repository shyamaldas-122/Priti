let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let particlesOnScreen = Math.floor(Math.random() * 500) + 1000
let particlesArray = [];
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

function random(min, max) {
  return min + Math.random() * (max - min + 1);
}

function createFlakes() {
  for (var i = 0; i < particlesOnScreen; i++) {
    particlesArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      speedX: random(-1, 1),
      speedY: random(1, 2),
      radius: random(1, 3)
    });
  }
}

function drawFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    ctx.beginPath();
    ctx.arc(
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].radius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle ="rgba(255, 255, 255, 0.4)";
    ctx.fill();
  }
}

function moveFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    particlesArray[i].x += particlesArray[i].speedX;
    particlesArray[i].y += particlesArray[i].speedY;

    if (particlesArray[i].y > h) {
      particlesArray[i].x = Math.random() * w * 1.5;
      particlesArray[i].y = -40;
    }
  }
}

function updateFall() {
  ctx.clearRect(0, 0, w, h);
  drawFlakes();
  moveFlakes();
}

function clientResize(e) {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", clientResize);

setInterval(updateFall, 30);
createFlakes();
