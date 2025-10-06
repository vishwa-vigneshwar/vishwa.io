// Loader Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('#loader').style.display = 'none';
        document.body.classList.remove('loading');
    }, 2500);

    // Animate stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        let count = 0;
        const increment = target / 100;
        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.textContent = Math.round(count * 10) / 10;
                setTimeout(updateCount, 25);
            } else {
                stat.textContent = target;
            }
        };
        updateCount();
    });
});

// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll
function scrollTo(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}

// Typing Effect
const texts = [
    'Unleash Cyber Power with Vishwa Creations',
    'Hacking Success in Tamil Nadu & Beyond',
    'Web Exploits, UI Traps, Mobile Payloads'
];
let index = 0;
let charIndex = 0;
const typewriter = document.querySelector('#typewriter');

function type() {
    if (charIndex < texts[index].length) {
        typewriter.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriter.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
    }
}

type();

// Tab Switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.querySelector(`#${button.getAttribute('data-tab')}`).classList.add('active');
    });
});

// Adjust layout on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 576) {
        navMenu.classList.remove('active');
    }
});

// Matrix Rain (Kali Wallpaper Simulation)
const canvas = document.createElement('canvas');
canvas.className = 'matrix-rain';
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '1';
document.querySelector('.hero-business').appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height / fontSize;
}

function draw() {
    ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff0000';
    ctx.font = fontSize + 'px VT323';
    ctx.textAlign = 'center';

    for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.95 ? ['KALI', 'MSF', 'LOOT', 'RAT'][Math.floor(Math.random() * 4)] : String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5;
    }
}

function animate() {
    requestAnimationFrame(animate);
    draw();
}
animate();

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const columns = canvas.width / fontSize;
    drops.length = columns;
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * canvas.height / fontSize;
    }
});

// Console Art (Kali-inspired)
console.log(`
  ██████╗  █████╗ ██████╗     ██████╗  █████╗ ███╗   ██╗███████╗
  ██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██╔══██╗████╗  ██║██╔════╝
  ██████╔╝███████║██████╔╝    ██████╔╝███████║██╔██╗ ██║███████╗
  ██╔═══╝ ██╔══██║██╔══██╗    ██╔══██╗██╔══██║██║╚██╗██║╚════██║
  ██║     ██║  ██║██║  ██║    ██████╔╝██║  ██║██║ ╚████║███████║
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
  Vishwa Creations - Cyber Elite 2025
  Time: 12:34 AM IST, October 07, 2025
`);
