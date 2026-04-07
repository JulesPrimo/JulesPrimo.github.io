const modal = document.getElementById('modal');
let animating = false;
let interval = null;

document.getElementById('modal-ok').addEventListener('click', () => {
    modal.classList.add('hidden');
    animating = true;
    interval = setInterval(draw, 200);
});

const con = document.getElementById('con');
const player = document.getElementById('player');
con.addEventListener('click', () => {
  con.classList.toggle('paused');
  if (con.classList.contains('paused')) {
    player.play();
  } else {
    player.pause();
  }
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  for (let i = 0; i < canvas.width; i += 10) {
    for (let j = 0; j < canvas.height; j += 10) {
      ctx.fillStyle = `rgb(${Math.random()*255|0},${Math.random()*255|0},${Math.random()*255|0})`;
      ctx.fillRect(i, j, 10, 10);
    }
  }
}

resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); if (animating) draw(); });
