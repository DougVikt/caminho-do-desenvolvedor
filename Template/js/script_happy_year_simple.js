// Estrelas de fundo
const starsDiv = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    star.style.width = star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    star.style.animationDelay = Math.random() * 2 + 's';
    starsDiv.appendChild(star);
}

// Balões
const balloonColors = ['linear-gradient(#ffd700, #ffaa00)', 'linear-gradient(#ff4500, #ff0000)', 'linear-gradient(#00bfff, #4169e1)', 'linear-gradient(#c71585, #ff1493)'];
const balloonsDiv = document.getElementById('balloons');
for (let i = 0; i < 8; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.width = (70 + Math.random() * 40) + 'px';
    balloon.style.height = (90 + Math.random() * 50) + 'px';
    balloon.style.left = (5 + i * 12) + '%';
    balloon.style.animationDelay = i * 2 + 's';
    balloonsDiv.appendChild(balloon);
}

// Confetes
function createConfetti() {
    const colors = ['#ffd700', '#ff4500', '#00bfff', '#ff1493', '#32cd32', '#fff'];
    const piece = document.createElement('div');
    piece.classList.add('confetti');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = piece.style.height = (8 + Math.random() * 10) + 'px';
    piece.style.animationDuration = (4 + Math.random() * 4) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 8000);
}
setInterval(createConfetti, 150);

// Fogos realistas com Canvas
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const fireworks = [];
const particles = [];
const colors = ['#ffd700', '#ff4500', '#00bfff', '#ff1493', '#32cd32', '#ff69b4', '#ffffff'];

class Firework {
    constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * canvas.height * 0.3 + 100;
    this.speed = Math.random() * 3 + 2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.exploded = false;
    }
    update() {
    if (!this.exploded) {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
        this.explode();
        playSound();
        }
    }
    }
    draw() {
    if (!this.exploded) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        // Trail
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + 20);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    }
    explode() {
    this.exploded = true;
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(this.x, this.y, this.color));
    }
    }
}

class Particle {
    constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.alpha = 1;
    this.gravity = 0.05;
    }
    update() {
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.01;
    }
    draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.color + Math.floor(this.alpha * 255).toString(16).padStart(2, '0');
    ctx.fill();
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();
    if (fw.exploded && particles.length > 1000) fireworks.splice(i, 1);
    });
    particles.forEach((p, i) => {
    if (p.alpha <= 0) particles.splice(i, 1);
    else {
        p.update();
        p.draw();
    }
    });
    requestAnimationFrame(animate);
}
animate();

setInterval(() => fireworks.push(new Firework()), 1000);
// Sequência intensa na virada
function newYearBurst() {
    for (let i = 0; i < 20; i++) setTimeout(() => fireworks.push(new Firework()), i * 200);
}

// Som
const fireworkSound = document.getElementById('fireworkSound');
const music = document.getElementById('music');
function playSound() {
    fireworkSound.currentTime = 0;
    fireworkSound.play().catch(() => {});
}
document.body.addEventListener('click', () => {
    music.play().catch(() => {});
}, { once: true });

// Contagem regressiva
function countdown() {
    const now = new Date();
    const newYear = new Date('2026-01-01T00:00:00');
    const diff = newYear - now;
    if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<strong>Feliz Ano Novo 2026! 🎉✨</strong>';
    newYearBurst();
    music.play();
    return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s até 2026!`;
}
setInterval(countdown, 1000);
countdown();
