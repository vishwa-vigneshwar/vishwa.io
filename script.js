// Loader Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('#loader').style.display = 'none';
        document.body.classList.remove('loading');
    }, 2000);

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
                setTimeout(updateCount, 20);
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
    'Transform Your Business with Vishwa Creations',
    'Crafting Digital Success for Tamil Nadu & Beyond',
    'Web Development, UI/UX, Apps by Vigneshwar S'
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
    // Ensure nav menu is hidden on mobile after resize
    if (window.innerWidth > 576) {
        navMenu.classList.remove('active');
    }
});
